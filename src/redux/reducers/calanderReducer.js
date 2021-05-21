
const initialState = {
    calander: {}
}

const calanderReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_CALANDER':
            return{
                ...state,
                calander: action.payload
            }
        case 'FORGET_CALANDER':
            return{
                ...state, 
                user: {}
            }
        default: 
            return state 
    }
}

export default calanderReducer
