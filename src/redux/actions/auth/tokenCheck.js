export const tokenStatus = status => {
    return {
        type: 'TOKEN_STATUS',
        status: status
    }
}

const tokenCheck = ()=> (dispatch) =>{
    localStorage.getItem('token')? 
        dispatch(tokenStatus(true))
        :
        dispatch(tokenStatus(false)) 
}

export default tokenCheck