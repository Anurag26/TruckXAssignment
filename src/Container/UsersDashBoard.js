import React, {Component} from 'react';
import './user-dashboard-style.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {deleteUser, initAllUsers} from "../Services/UserServices";
import PropTypes from "prop-types";
import UserTable from "../Components/UserTable";


class UsersDashBoard extends Component {

    componentDidMount() {
        if(this.props.first_time){
            this.props.initAllUsers();
        }
    }



    render() {
        return (
            <div className="container">
                <h1>My Customers</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Search Users</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Search for names, username, email, phones"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/add-user" type="button" className="btn btn-success add-user">Add User</Link>
                    </div>
                </div>
                <div className="user-table">
                    <div className="row">
                        <div className="col-sm-12 table-head">
                            <div className="row">
                                <div className="col-sm-2">Name</div>
                                <div className="col-sm-2">User Name</div>
                                <div className="col-sm-2">Email</div>
                                <div className="col-sm-2">Phone</div>
                                <div className="col-sm-2">Created At</div>
                                <div className="col-sm-2">Actions</div>
                            </div>
                        </div>
                        {this.props.users.map(user=><UserTable user={user} deleteUser={this.props.deleteUser}/>)}
                    </div>
                </div>
            </div>

        );
    }
}


function mapStateToProps(state) {
    console.log(state.users.users)
    return {
        users: state.users.users,
        first_time:state.users.first_time
    };
}

const mapDispatchToProps = (dispatch) =>{

    return{
        initAllUsers:() =>{
            initAllUsers()
                .then(users=>dispatch({
                    type:"INIT_ALL_USERS",
                    users:users.data
                }))
        },
        deleteUser:(id)=>{
            console.log("Yo")
            deleteUser(id).then(resp=>{
                if(resp===204){
                    return dispatch({
                        type:"DELETE_USER_BY_ID",
                        userId:id
                    })
                }
                else{
                    alert("Could not delete user, try again!");
                }
            })
        }
    }
};

UsersDashBoard.propTypes = {
    users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersDashBoard);
