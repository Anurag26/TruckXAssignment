

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
            alert("New User created.")
            return{
                ...state,
                users:[
                    ...state.users,
                    action.user
                ]
            }

        default:
            return state;
    }

};

export  default UsersReducer;
