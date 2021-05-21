//-------------------------------------------- get user ------------------------------------------//
const GetUser=log=>{
 
    // const dispatch = useDispatch()

    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }

    fetch('http://localhost:3000/api/v1/signin',req)
    .then(res=>res.json())
    .then(data=> console.log(data))
}

export default GetUser