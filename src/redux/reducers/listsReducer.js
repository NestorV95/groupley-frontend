const initialState = { 
    loading: false,
    lists: [],
    error: '',
    selectedList: {}
}

const listsReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_LISTS_REQUEST':
            return{ 
                ...state,
                 loading: true 
            }

        case 'FETCH_LISTS_SUCCESS':
            return{ 
                ...state,
                loading: false,
                lists: action.lists,
                error: ''
            }

        case 'FETCH_LISTS_FAILURE':
            return{ 
                ...state,
                loading: false,
                lists: [],
                error: action.error 
            } 
        
        default: 
            return state 
    }
}

export default listsReducer