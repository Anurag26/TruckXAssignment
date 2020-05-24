import React, {Component} from 'react';
import './user-dashboard-style.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {deleteUser, initAllUsers} from "../Services/UserServices";
import PropTypes from "prop-types";
import UserTable from "../Components/UserTable";
import { withRouter } from 'react-router-dom';


class UsersDashBoard extends Component {

    componentDidMount() {

        if(!window.localStorage.getItem('token')){
            this.props.history.push('/login');
        }

        if(this.props.first_time){
            this.props.initAllUsers();
        }
    }

    state={
        userSearch:''
    }

    search = (userSearch)=>{
        this.props.userSearch(userSearch)
    }

    logoutUser = () =>{
        console.log("logging out")
        window.localStorage.removeItem('token');
        this.props.history.push('/login');
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10"></div>
                    <div className="col-sm-2">
                        <button className="btn btn-danger" onClick={()=>this.logoutUser()}>Logout</button>
                    </div>
                </div>
                <h1>My Customers</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Search Users</label>
                                <input type="email" className="form-control" value={this.state.userSearch} id="exampleInputEmail1" onChange={(e)=>this.setState({
                                    userSearch:e.target.value
                                })}
                                       aria-describedby="emailHelp" placeholder="Search for names, username, email, phones"/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={()=>this.search(this.state.userSearch)}>Search</button>
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
            if(window.confirm("Delete user?")){
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
        },
        userSearch:(searchTerm) =>{
            dispatch({
                type:'SEARCH_USER_TERM',
                term:searchTerm
            })
        }
    }
};

UsersDashBoard.propTypes = {
    users: PropTypes.array.isRequired,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UsersDashBoard));
