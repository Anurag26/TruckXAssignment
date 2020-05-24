import initialState from "../initialState";
import * as types from "../actions/actionTypes";

const UsersReducer = (state = initialState , action)=>{
    switch (action.type) {
        case types.INIT_ALL_USERS:
            return {...state,
            first_time: false,
            users:action.users
            };
        case types.CREATE_NEW_USER:
            return{
                ...state,
                users:[
                    ...state.users,
                    action.user
                ]
            };
        case types.UPDATE_USER:
            return{
                ...state,
                users:state.users.map(user=>{
                    if(user.id==action.user.userId){
                        return action.user.newUser;
                    }
                    else{
                        return user;
                    }
                })
            };
        case types.DELETE_USER_BY_ID:
            return{
                ...state,
                users:state.users.filter(user=>{return user.id!==action.userId})
            };

        case types.SEARCH_USER_TERM:
            return{
                ...state,
                users:state.users.filter(user=>{
                    if(action.term.length>0){
                        if(user.email===action.term||user.phone===action.term||user.first_name===action.term||user.last_name===action.term){
                            return user;
                        }
                    }
                })
            };
        default:
            return state;
    }
};

export  default UsersReducer;
