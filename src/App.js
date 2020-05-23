import React, {Component} from 'react';
import UsersDashBoard from "./Container/UsersDashBoard";
import Register from './Components/Register';
import Login from "./Components/Login";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";

class App extends Component {
    render() {
        return (
            <div>
              <EditUser/>
            </div>
        );
    }
}

export default App;
