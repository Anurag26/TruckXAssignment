import React, {Component} from 'react';
import {combineReducers, createStore} from "redux";
import UsersReducer from '../Reducers/UsersReducer';
import {Provider} from "react-redux";
import './user-dashboard-style.css';

const userReducer  = combineReducers({users:UsersReducer});
const store = createStore(userReducer);

class UsersDashBoard extends Component {

    render() {
        return (
            <Provider store={store}>
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
                        <button type="button" className="btn btn-success add-user">Add User</button>
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
                        <div className="col-sm-12 table-row">
                            <div className="row">
                                <div className="col-sm-2">Anurag Bannur</div>
                                <div className="col-sm-2">abannur</div>
                                <div className="col-sm-2">bannur@bannur.com</div>
                                <div className="col-sm-2">+12345678</div>
                                <div className="col-sm-2">11/11/2020</div>
                                <div className="col-sm-2">
                                    <div className="row">
                                        <div className="col-sm-6"><button className="btn btn-primary">Edit</button></div>
                                        <div className="col-sm-6"><button className="btn btn-danger">Delete </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Provider>
        );
    }
}

export default UsersDashBoard;
