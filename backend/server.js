const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require("./types");
const { todomodel } = require("./db");
app.use(express.json());
app.use(cors());

app.post("/todos", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const parsedData = createTodo.safeParse(data);
  if (!parsedData.success) {
    res.status(411).json({
      msg: "Invalid data",
    });
    return;
  }

  try {
    await todomodel.create({
      title: parsedData.data.title,
      description: parsedData.data.description,
      completed: false,
    });
    console.log("Todo created");

    res.status(200).json({
      msg: "Todo created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const data = await todomodel.find({});
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.put("/completed", async (req, res) => {
  const id = req.body;
  const parsedID = updateTodo.safeParse(id);
  if (!parsedID.success) {
    res.status(411).json({
      msg: "Invalid data",
    });
    return;
  }
  try {
    await todomodel.updateOne(
      {
        _id: parsedID.data.id,
      },
      {
        completed: true,
      }
    );
    console.log("Todo updated");
    res.status(200).json({
      msg: "Todo updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
