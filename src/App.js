import React, {Component} from 'react';
import UsersDashBoard from "./Container/UsersDashBoard";
import Login from "./Components/Login";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import {BrowserRouter,Route,Link} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import UsersReducer from "./Redux/Reducers/UsersReducer";

const reducer  = combineReducers({users:UsersReducer});
const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <Route path="/add-user" exact={true}><AddUser/></Route>
                <Route path="/edit-user/:user" exact={true}><EditUser/></Route>
                <Route path="/login" exact={true}><Login/></Route>
                <Route path="/" exact={true}><Login/></Route>
                <Route path="/users" exact={true}><UsersDashBoard/></Route>
            </BrowserRouter>
            </Provider>

        );
    }
}

export default App;
