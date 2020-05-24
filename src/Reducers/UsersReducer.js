

const initState=[];


const UsersReducer = (state = initState , action)=>{

    switch (action.type) {
        case 'INIT_ALL_USERS':
            console.log("Reducer hit");
            console.log(action.users);
            // state.users = []
            // for(var i=0;i<action.users.length;i++){
            //     state.users.push(action.users[i])
            // }
            console.log(Array.isArray(action.users))
            return action.users;
        default:
            return state;
    }

    // if(action.type==="INIT_ALL_USERS"){
    //     if(state.users.length===0){
    //         state.users = {
    //             ...
    //             action.users}
    //     }
    // }
    //
    // return state;
};

export  default UsersReducer;
