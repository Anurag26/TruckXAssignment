import React, {useState} from "react";
import './Add-user.style.css'
import {createUser, initAllUsers} from "../Services/UserServices";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import uuid from 'react-uuid'

function AddUser(props){
    let history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function submit() {
        let user={
            first_name:firstName,
            last_name:lastName,
            email:email,
            phone:phone,
            created_date:new Date().toDateString(),
            uuid:uuid()
        }
        props.createUser(user);
        history.push('/users');
    }

    return(
        <div className="container">
            <h1>Add User</h1>
            <h4>First Name:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="firstname" onChange={(e)=>setFirstName(e.target.value)}
                            placeholder="Enter First Name"/>
                </div>
            </div>
            <h4>Last Name:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="lastname"
                           onChange={(e)=>setLastName(e.target.value)}
                           placeholder="Enter Second Name"/>
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


function mapStateToProps(state) {
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) =>{

    return{
        createUser:(user) =>{
            console.log("new user "+user);
            createUser(user)
                .then(user=>dispatch({
                    type:"CREATE_NEW_USER",
                    user:user
                }))
        }
    }
};

AddUser.propTypes = {
    users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);

