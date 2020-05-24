import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Register() {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [verifyPassword,setVerifyPassword] = useState("");

    function submit() {
        if(verifyPassword===password){
            // Do the submit
            console.log(email)
            console.log(password)
            console.log(verifyPassword)
        }
        else{
            //Alert passwords don't match
            console.log("Passwords don't match")
        }
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <br/>
            <br/>
            <form>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-email"
                               id="email"
                               onChange={(e)=>setEmail(e.target.value)}
                               placeholder="email@email.com"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password"
                               onChange={(e)=>setPassword(e.target.value)}
                               id="password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="verifyPassword" className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password-verify"
                               onChange={(e)=>setVerifyPassword(e.target.value)}
                               id="verifyPassword" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button onClick={()=>submit()} className="btn btn-primary btn-block wbdv-button wbdv-register">Register</button>
                        <div className="row">
                            <div className="col-6">
                                <Link to={'/login'}
                                   className="wbdv-link wbdv-login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
