import React, {useState,useEffect} from "react";
import './Add-user.style.css'
import {createUser, updateUser} from "../Services/UserServices";
import PropTypes from "prop-types";
import { useParams} from "react-router";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

function EditUser(props){
    let history = useHistory();
    const {id} = useParams();
    const [first_name, setFirstName] = useState("");
    const [last_name,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function submit() {
        let newUser={
            first_name:first_name,
            last_name:last_name,
            email:email,
            phone:phone,
            created_date:new Date().toDateString()

        }
        props.updateUser(id,newUser)
        history.push('/users');
    }


    return(
        <div className="container">
            <h1>Edit User</h1>
            <h4>Name:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="name" onChange={(e)=>setFirstName(e.target.value)}
                           placeholder="Enter Name"/>
                </div>
            </div>
            <h4>Username:</h4>
            <div className="row">
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="username"
                           onChange={(e)=>setLastName(e.target.value)}
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
            <button className="btn btn-primary" onClick={()=>submit()} type="submit">Confirm Edit</button>
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
        updateUser:(id,user) =>{
            updateUser(id,user)
                .then(newUser=>{
                    dispatch({
                    type:'UPDATE_USER',
                    userId:id,
                    newUser:newUser
                })}).catch(err=>console.log(err))
        },
    }
};

EditUser.propTypes = {
    users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUser);
