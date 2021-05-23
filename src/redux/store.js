import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer'
import currentUserReducer from './reducers/currentUserReducer'
// import isLoggedReducer from './reducers/isLoggedReducer'
import groupReducer from './reducers/groupReducer'
import listsReducer from './reducers/listsReducer'
import calanderReducer from './reducers/calanderReducer'
import selectedListReducer from './reducers/selectedListReducer'
// import tokenReducer from './reducers/TokenReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    currentUserState: currentUserReducer,
    // tokenState: tokenReducer,
    // isLoggedState: isLoggedReducer,
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