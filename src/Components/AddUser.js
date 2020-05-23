import React, {useState} from "react";
import './Add-user.style.css'

function AddUser(){

    const [name, setName] = useState("");
    const [userName,setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function submit() {
        console.log(name)
        console.log(userName)
        console.log(email)
        console.log(phone)
    }

    return(
        <div className="container">
            <h1>Add User</h1>
            <h4>Name:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter Name"/>
                </div>
            </div>
            <h4>Username:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="username"
                           onChange={(e)=>setUserName(e.target.value)}
                           placeholder="Enter Username"/>
                </div>
            </div>
            <h4>Email:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="email" className="form-control" id="email"
                           onChange={(e)=>setEmail(e.target.value)}
                           placeholder="Enter Email"/>
                </div>
            </div>
            <h4>Phone number:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="number" className="form-control" id="phonenumber"
                           onChange={(e)=>setPhone(e.target.value)}
                           placeholder="Enter Phone number"/>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>submit()} type="submit">Create User</button>
        </div>
    )

}

export default AddUser;
