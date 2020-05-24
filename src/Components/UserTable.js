import React, {Component} from 'react';
import {Link} from "react-router-dom";

class UserTable extends Component {
    render() {
        return (

            <div className="col-sm-12 table-row">
                <div className="row">
                    <div className="col-sm-2">{this.props.user.first_name}</div>
                    <div className="col-sm-2">{this.props.user.first_name}</div>
                    <div className="col-sm-2">{this.props.user.email}</div>
                    <div className="col-sm-2">{this.props.user.phone}</div>
                    {this.props.user.phone && <div className="col-sm-2">{this.props.user.phone}</div>}
                    <div className="col-sm-2">11/11/2020</div>
                    <div className="col-sm-2">
                        <div className="row">
                            <div className="col-sm-6"><Link to="/edit-user" className="btn btn-primary">Edit</Link></div>
                            <div className="col-sm-6"><button className="btn btn-danger">Delete</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserTable;
