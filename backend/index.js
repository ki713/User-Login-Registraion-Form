const express  = require("express");
// require("./Models/student");
const mongoose = require("mongoose");
const cors = require("cors");

//const env = require(".dotenv");
const port = process.env.PORT || 3001;


const app = express();
 app.use(express.json());
 app.use(express.urlencoded());
 app.use(cors());
 app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

 //to connect the database
 mongoose.connect("mongodb://localhost:27017/Register",{
     useNewUrlParser: true,
     useUnifiedTopolgy: true
 },()=>{
     console.log("db connection successful");
 });


//  const signUp = new mongoose.Schema ({
//     fullName : {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String, 
//         required: true
//     }
// })


const signUp = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// first argument is table name and second one is schema name 
const User = new mongoose.model("User Schema",signUp)



 //routes
app.post("/login",(req,res)=>{
    
   const {email,pasword} = req.body
   User.findOne({email : email},(err,user)=>{
       if(user)
       {
           if(password === user.password)
           {
               res.send({message : "Login Successful",user:user});
           }
           else{
               res.send({message : "Password didn't matches"});
           }
       }
       else{
           res.send({message: "User is not registered"})
       }
   })



});

app.post("/register",(req,res)=>{
    const {name , email, password} = req.body
    User.findOne({email : email},(err,user)=>{
        if(user){
            res.send({message:"User already registered" });
        }
        else
        {
            const user = new User ({
                name:"",
                email:"",
                password:""
            })
            user.save(err =>{
                if(err)
                {
                    res.send(err);
                }
                else{
                    res.send({message : "Successfully registered"});
                }
            })
        }
    })
  
});



 
 

//to connect to the localhost
 app.listen(port,(req,res)=>{
     console.log(`App is listening on ${port}`);
 })
