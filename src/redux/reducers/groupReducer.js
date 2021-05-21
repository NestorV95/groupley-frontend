const initialState = {
    group:[]
}

const groupReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'JOIN_GROUP':
            return{
                ...state,
                group: [...state, action.payload]
            }
        case 'LEAVE_GROUP':
            return{
                ...state, 
                group:state.group.filter(user=> user.id !== action.payload.id)
            }
        default: 
            return state 
    }
}

export default groupReducer