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

        case 'FETCH_LIST_REQUEST':
            return{ 
                ...state,
                 loading: true 
            }
    
        case 'FETCH_LIST_SUCCESS':
            return{ 
                ...state,
                loading: false,
                selectedList: action.list,
                error: ''
            }
    
        case 'FETCH_LIST_FAILURE':
            return{ 
                ...state,
                loading: false,
                error: action.error 
            }
        
        case 'SELECT_LIST':
            return{
                ...state, 
                selectedList: action.list
            }
        
        case 'ADD_TO_LISTS':
            return{
                ...state,
                lists: [...state.lists, action.list],
                selectedList: action.list
            }

        case 'UPDATE_LISTS':
            return{
                ...state,
                lists: state.lists.map(list=> list.id === action.list.id? action.list : list)
            }
        
        default: 
            return state 
    }
}

export default listsReducer