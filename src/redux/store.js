import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer'
import currentUserReducer from './reducers/currentUserReducer'
import groupReducer from './reducers/groupReducer'
import listsReducer from './reducers/listsReducer'
import calanderReducer from './reducers/calanderReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    currentUserState: currentUserReducer,
    groupState: groupReducer,
    listsState: listsReducer,
    calanderState: calanderReducer,
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
)

export default store