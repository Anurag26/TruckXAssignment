import React, { useState } from 'react';
import {loginUser} from "../Services/UserServices";
import { useHistory } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    let history = useHistory();
    function submit() {
        let user={
            email: email,
            password:password
        };

        loginUser(user)
            .then(token=>{
                window.localStorage.setItem('token',token.token)
                history.push('/users')
            })
            .catch(err=>{throw err});
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <br/>
            <br/>
            <form>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label ">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
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
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <btn className="btn btn-primary btn-block wbdv-button wbdv-login" onClick={()=>submit()}>Log in</btn>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
