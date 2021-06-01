const initialState = {
    loading: null,
    groups:null,
    error: null,
    selectedStatus: false,
    selectedGroup: {},
    membershipStatus: null,
}

const groupReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_GROUPS':
            return{
                ...state,
                groups: action.groups
            }

        case 'GROUP_STATUS':
            return{
                ...state,
                selectedStatus: action.status
            }

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
        
        // case 'JOIN_GROUP':
        //     return{
        //         ...state,
        //         groups: [...state.groups, action.group]
        //     }
        // case 'LEAVE_GROUP':
        //     return{
        //         ...state,
        //         groups: state.groups.filter(group=> group.id !== selectedGroup.id)
        //     }
        
        default: 
            return state 
    }
}

export default groupReducer