const mongoose=require("mongoose");

async function connectDB(){
    try{
await mongoose.connect("mongodb+srv://cephajj:gt8JL2b4i4qxbqmJ@cluster0.ray64mt.mongodb.net/todos");
console.log("Connected to MongoDB");
}
catch(err){
    console.log(err);
}
}

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todomodel = mongoose.model("todos",todoschema);

module.exports={todomodel};
