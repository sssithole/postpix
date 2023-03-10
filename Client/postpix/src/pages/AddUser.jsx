import React , { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const AddUser = () =>{

    // let navigate = useNavigate()

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {name,username,email} = user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    const onSubmit = async (e) =>{
        e.preventDefult();
        await axios.post("http:localhost:8080/user", user)
        // navigate('/')
    }

    return (
        <div className="cover">
            <h1>Hello AddUser</h1>
            <form onSubmit={(e)=>onSubmit(e)}>
            <lable>name</lable>
            <input type={'text'} placeholder="Enter your name" name="name" value={name} onChange={(e)=>onInputChange(e)} />
            <lable>username</lable>
            <input type={'text'} placeholder="Enter your username" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
            <lable>e-mail</lable>
            <input type={'text'} placeholder="Enter your email" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
            
            <button type={'submit'} >submit</button>
            </form>
        </div>
    )
}

export default AddUser; 