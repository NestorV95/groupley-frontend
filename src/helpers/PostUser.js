//------------------------------------------- packages -------------------------------------------//

//------------------------------------------ components ------------------------------------------//
// import {logInAction} from '../redux/user/userActions'
//-------------------------------------------- styles --------------------------------------------//

//------------------------------------------- post user ------------------------------------------//
const PostUser = newUser =>{
 
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user: newUser})
    }

    fetch('http://localhost:3000/api/v1/signup',req)
    .then(res=>res.json())
    .then(data=> console.log(data))
}

export default PostUser
