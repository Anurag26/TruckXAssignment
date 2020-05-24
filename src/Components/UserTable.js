import React, {Component} from 'react';
import {Link} from "react-router-dom";

class UserTable extends Component {
    render() {
        return (

            <div className="col-sm-12 table-row">
                <div className="row">
                    <div className="col-sm-2">{this.props.user.first_name}</div>
                    <div className="col-sm-2">{this.props.user.last_name}</div>
                    <div className="col-sm-2">{this.props.user.email}</div>
                    <div className="col-sm-2">{this.props.user.phone}</div>
                    <div className="col-sm-2">{this.props.user.created_date && this.props.user.created_date}</div>
                    <div className="col-sm-2">
                        <div className="row">
                            <Link className="btn btn-primary"  to={{
                                pathname: '/edit-user/'+this.props.user.first_name+'&&'+this.props.user.last_name
                                +'&&'+this.props.user.email+'&&'+this.props.user.phone+'&&'+this.props.user.id,
                            }}>Edit</Link>
                            <div className="col-sm-6"><button className="btn btn-danger"
                                                              onClick={()=>this.props.deleteUser(this.props.user.id)}
                                                              >Delete</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserTable;
