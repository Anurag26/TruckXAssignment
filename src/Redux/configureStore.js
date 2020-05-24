import {createStore} from "redux";
import rootReducer from "./Reducers";

export default function configureStore(){
    return createStore(rootReducer);
}
