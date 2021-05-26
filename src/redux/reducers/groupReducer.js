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
        case 'SET_GROUPS':
            return{
                ...state,
                groups: action.groups
            }
        // case 'FETCH_GROUPS_REQUEST':
        //     return{
        //         ...state,
        //         loading: true
        //     }  
        // case 'FETCH_GROUPS_SUCCESS':
        //     return{
        //         ...state,
        //         loading: false,
        //         groups: action.groups,
        //         error: ""
        //     }  
        // case 'FETCH_GROUPS_FAILURE':
        //         return{
        //             ...state,
        //             loading: false,
        //             groups: null,
        //             error: action.error
        //     }
        case 'FETCH_GROUP_REQUEST':
                return{
                    ...state,
                    loading: true
                }  
        case 'FETCH_GROUP_SUCCESS':
                return{
                    ...state,
                    loading: false,
                    error: "",
                    selectedGroup: action.group
                }  
        case 'FETCH_GROUP_FAILURE':
                return{
                    ...state,
                    loading: false,
                    error: action.error,
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