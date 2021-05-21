const initialState = { selectedList: {}}

const selectedListReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SELECT_LIST':
            console.log(action)
            return{ ...state, selectedList: action.selectedList }

        case 'DESELECT_LIST':
            return{ ...state, selectedList: {} }

        default: 
            return state 
    }
}

export default selectedListReducer