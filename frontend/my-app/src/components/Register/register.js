import React,{ useState } from "react";
//import React, { useState } from "react";
import "./register.css";
import axios from "axios";

const Register =() => {
    const [user,setUser]  = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword:""

    })

    const handleChange = e =>{
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })

    }


    const register = () =>{
        const {name,email,password,reEnterPassword} =user;
        if(name&&email&&password&& (password ===reEnterPassword))
        {
            axios.post("http://localhost:3001/register",user)
            .then(res => console.log(res));
        }
        else{
            alert("Invalid Input");
        }
    }

    
    return(
    
        <div className="register">

            {console.log("User",user)}
        <input type="text" name="name" value={user.name} placeholder = "Enter your name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder = "Enter your email" onChange={handleChange}></input>
        <input type = "password"  name = "password"  value = {user.password} placeholder = "Enter your password" onChange={handleChange}></input>
        <input type = "password" name="reEnterPassword" value={user.reEnterPassword} placeholder = "Re-Enter your password" onChange={handleChange}></input>

        <div className = "button" onClick={register}>Register</div>
        <div>or</div>
        <div className = "button">Login</div>
     </div>
    )

}

export default Register;