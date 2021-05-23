export const tokenValid = validation =>{
    return{
        type: 'TOKEN_VALID',
        valid: validation
    }
}

const tokenValidation = () => (dispatch) =>{
    localStorage.getItem('token')=== undefined? 
        dispatch(tokenValid(false)) 
        : 
        dispatch(tokenValid(true))
}

export default tokenValidation