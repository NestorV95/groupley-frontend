const initialState = {
    loading: null,
    currentUser: null,
    error: ''
}

const currentUserReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_USER_REQUEST':
            return{ 
                ...state,
                 loading: true 
            }

        case 'FETCH_USER_SUCCESS':
            return{ ...state,
                loading: false,
                currentUser: action.user,
                error: '' 
            }

        case 'FETCH_USER_FAILURE':
            return{ 
                ...state,
                loading: false,
                currentUser: null,
                error: action.error 
            } 
            
        case 'CLEAR_USER':
            return{
                ...state,
                currentUser: null
            }
        default: 
            return state 
    }
}

export default currentUserReducer