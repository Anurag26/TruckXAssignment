import * as types from "./actionTypes";

export function loadUsers(users){
    return {type: types.INIT_ALL_USERS, users:users};
}

export function createNewUser(user){
    return {type:types.CREATE_NEW_USER,user:user};
}

// export function updateUser(user){
//     return {types:types.UPDATE_USER, userId:user.id,}
// }
