

const initState={
    users:[],
    first_time:true
};


const UsersReducer = (state = initState , action)=>{

    switch (action.type) {
        case 'INIT_ALL_USERS':
            return {...state,
            first_time: false,
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
        case 'DELETE_USER_BY_ID':
            console.log(action.userId)
            return{
                ...state,
                users:state.users.filter(user=>{return user.id!==action.userId})
            }

        case 'SEARCH_USER_TERM':
            console.log(action.term)
            return{
                ...state,
                users:state.users.filter(user=>{
                    if(action.term.length>0){
                        if(user.email===action.term||user.phone===action.term||user.first_name===action.term||user.last_name===action.term){
                            return user;
                        }
                    }
                    else{
                        return state.users;
                    }
                })
            }

        default:
            return state;
    }

};

export  default UsersReducer;
