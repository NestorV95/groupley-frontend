const initialState = {
    loading: null,
    allGroups: null,
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

        case 'ADD_GROUP':
            return{
                ...state,
                groups: [...state.groups, action.group]
            }

        case'SET_ALL_GROUPS':
            return {
                ...state,
                allGroups: action.groups
            }

        case 'ADD_ALL_GROUPS':
            return {
                ...state,
                allGroups: [...state.allGroups, action.group]
            }

        case 'EDIT_GROUPS':
            const editAllGroups = state.allGroups.map(group => group.id === action.group.id? action.group : group)
            return {
                ...state,
                allGroups: editAllGroups
            }
        
        default: 
            return state 
    }
}

export default groupReducer