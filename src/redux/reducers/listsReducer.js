const initialState = { 
    loading: false,
    lists: [],
    error: '',
    selectedList: null
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

        case 'SET_LISTS':
            return{
                ...state,
                lists: action.lists
            }
        case 'SELECT_LIST':
            return{
                ...state, 
                selectedList: action.list
            }
        
        default: 
            return state 
    }
}

export default listsReducer