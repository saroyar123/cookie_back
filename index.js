const express=require('express');
const jwt=require("jsonwebtoken");
const cors=require('cors');
const cookiePareser=require('cookie-parser');

const app=express();
app.use(cors());
app.use(cookiePareser());
app.use(express.json());
app.get("/",(req,res)=>{
res.status(200).json({
    sucess:true,
    message:"hello"
})
});




app.post("/token",(req,res)=>{
    const token=jwt.sign({name:"saroyar"},'saroyar');
    res.status(200).json({
        sucess:true,
        message:"token is send",
        token:token
    })
})

app.post("/getToken",(req,res)=>{
    
    const {token}=req.body;
    const data=jwt.verify(token,'saroyar');
   

    res.status(200).json({
        sucess:true,
        message:"your token",
        user:data.name
    })
})


app.listen(4000,()=>{
    console.log("server is live")
})