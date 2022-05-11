
const mongoose = require("mongoose");
const express = require('express');
const app = express.Router();

const signUpTemp = require("../Models/student")


//routes
app.post("/login",(req,res)=>{
    
        res.send("Login Page");

    
    
});

app.post("/register",(req,res)=>{
   res.send("Register Page");
});

 