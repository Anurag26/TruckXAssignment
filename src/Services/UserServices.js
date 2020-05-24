export const initAllUsers = () =>{
return fetch(`https://reqres.in/api/users`)
    .then((res)=>res.json())
    .catch((err)=> {throw err});
};

export const loginUser = (user) =>{
    return fetch(`https://reqres.in/api/login`,{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json())
        .catch(err=>{throw err});
};

export const createUser = (user) =>{
    return fetch(`https://reqres.in/api/users`,{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json())
        .catch(err=>{throw err});
};

export const updateUser = (id,user) =>{
    return fetch(`https://reqres.in/api/${id}`,{
        method:'PUT',
        body:JSON.stringify(user),
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json())
        .catch(err=>{throw err});
};


export const deleteUser = (id) =>{
    return fetch(`https://reqres.in/api/${id}`,{
        method:"DELETE"
    }).then(res=>res.status)
};
