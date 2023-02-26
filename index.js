const express=require('express');
const jwt=require("jsonwebtoken");
const cors=require('cors');

const app=express();
app.use(cors());

app.get("/",(req,res)=>{
res.status(200).json({
    sucess:true,
    message:"hello"
})
});

const token= jwt.sign({name:"saroyar"},'saroyar');
// console.log(token);

const option = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
    priority:"high"
  };

app.get("/token",(req,res)=>{
    res.cookie("token",token,option).status(200).json({
        sucess:true,
        message:"token is send",
        token:token
    })
})


app.listen(4000,()=>{
    console.log("server is live")
})