const express =require("express");
const app=express();
const port=3000;
app.use(express.json());

app.post("/todos",(req,res)=>{
    
})

app.get("/todos",(req,res)=>{

})

app.put("/completed",(req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})