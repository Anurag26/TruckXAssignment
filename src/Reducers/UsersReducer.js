

const initState={
    users:[]
};


const UsersReducer = (state = initState , action)=>{

    switch (action.type) {
        case 'INIT_ALL_USERS':
            return {...state,
            users:action.users
            };
        case 'CREATE_NEW_USER':
            return{
                ...state,
                users:[
                    ...state.users,
                    action.user
                ]
            }
        case 'UPDATE_USER':
            console.log(action.userId)
            console.log(action.newUser)
            return{
                ...state,
                users:state.users.map(user=>{
                    if(user.id==action.userId){
                        console.log("user found")
                        return action.newUser;
                    }
                    else{
                        return user;
                    }
                })
            }

        default:
            return state;
    }

};

export  default UsersReducer;
