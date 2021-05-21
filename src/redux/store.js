import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import currentUserReducer from './reducers/currentUserReducer'
import isLoggedReducer from './reducers/isLoggedReducer'
import groupReducer from './reducers/groupReducer'
import listsReducer from './reducers/listsReducer'
import calanderReducer from './reducers/calanderReducer'
import selectedListReducer from './reducers/selectedListReducer'

const rootReducer = combineReducers({
    currentUserState: currentUserReducer,
    isLoggedState: isLoggedReducer,
    groupState: groupReducer,
    listsState: listsReducer,
    calanderState: calanderReducer,
    selectedListState: selectedListReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
)

export default store