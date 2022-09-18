const express=require("express");
const app=express();
app.use("/",express.static('public'));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/users",(req,res)=>{
    res.send("Hey Users!");
});
app.listen(4000,()=>console.log("server running!"));