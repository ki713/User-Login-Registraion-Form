import React , { useState} from "react";
import "./login.css";
import axois from "axois";
import { Axios } from "axios";



const Login =() => {
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

    const login = () =>{
        const {email,password} =user;
        if(email&&password)
        {
            Axios.post("http://localhost:3001/register",user)
            .then(res => console.log(res));
        }
        else{
            alert("Invalid Input");
        }

    }
    return(
        <div className="login">
           <input type="text" name="email" value={user.email} placeholder = "Enter your email" onChange={handleChange}></input>
           <input type = "password" name = "password"  value = {user.password} placeholder = "Enter your password" onChange={handleChange}></input>

           <div className = "button">Register</div>
           <div>or</div>
           <div className = "button" onClick={login}>Login</div>
        </div>
    )

}

export default Login;