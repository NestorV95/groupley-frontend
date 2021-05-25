const initialState = {
    loading: null,
    groups:null,
    error: null,
    selectedGroup: {
        image: null,
        name: null,
        code: null,
        users: []
    }
    
}

const groupReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_GROUPS_REQUEST':
            return{
                ...state,
                loading: true
            }  
        case 'FETCH_GROUPS_SUCCESS':
            return{
                ...state,
                loading: false,
                groups: action.groups,
                error: ""
            }  
            case 'FETCH_GROUPS_FAILURE':
                return{
                    ...state,
                    loading: false,
                    groups: null,
                    error: action.error
                }      

        case 'SELECT_GROUP':
            return{
                ...state,
                selectedGroup: action.group
            }
        default: 
            return state 
    }
}

export default groupReducer