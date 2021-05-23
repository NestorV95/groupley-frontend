import loggedStatus from '../auth/loggedStatus'

const deleteUser = () => async (dispatch) => {
    const req={
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }
    await fetch('http://localhost:3000/api/v1/terminate',req)
    .then(dispatch(loggedStatus(false)))   
}

export default deleteUser