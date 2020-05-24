import * as types from "./actionTypes";

export function loadUsers(users){
    return {type: types.INIT_ALL_USERS, users:users};
}

export function createNewUser(user){
    return {type:types.CREATE_NEW_USER,user:user};
}

export function deleteUSerById(id){
    return {type: types.DELETE_USER_BY_ID, userId:id};
}

export function searchTermByText(searchTerm){
    return {type:types.SEARCH_USER_TERM,term:searchTerm}
}

export function updateUserByID(id, newUser){
    return {type:types.UPDATE_USER, user:{userId: id, newUser: newUser}}
}
