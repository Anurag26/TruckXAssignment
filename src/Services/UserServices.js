export const initAllUsers = () =>{
return fetch(`https://reqres.in/api/users`)
    .then((res)=>res.json())
    .catch((err)=> {throw err});
}
