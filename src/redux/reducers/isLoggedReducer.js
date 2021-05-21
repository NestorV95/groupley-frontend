const initialState = {
    isLogged: false
}

const isLoggedReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGGED_IN':
            return{
                ...state,
                isLogged: true
            }
            
        case 'LOGGED_OUT':
            return{
                ...state,
                isLogged: false
            }
     
        default: 
            return state 
    }
}

export default isLoggedReducer