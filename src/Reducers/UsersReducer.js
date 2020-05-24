

const initState={
    users:[],
    first_time:true,
    user_being_edited:{}
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

        case 'FIND_USER_BYID':
            console.log(action.userId)
            console.log(typeof(action.userId))
            return {
                ...state,
                users:state.users.map(user=>{  {
                    if(user.id==action.userId){
                        state.user_being_edited=user
                        return state.user_being_edited
                    }
                }})
            }
        default:
            return state;
    }

};

export  default UsersReducer;
