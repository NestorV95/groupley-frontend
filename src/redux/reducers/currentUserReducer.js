import { fetchUserRequest,fetchUserSuccess,fetchUserFailure} from '../actions/userActions'
import {isLoggedIn} from '../actions/isLoggedActions'

const initialState = {
    loading: false,
    currentUser: {},
    error: ''
}

const currentUserReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_USER_REQUEST':
            return{ ...state, loading: true }

        case 'FETCH_USER_SUCCESS':
            return{ ...state, loading: false, currentUser: action.user, error: '' }

        case 'FETCH_USER_FAILURE':
            return{ ...state, loading: false, currentUser: {}, error: action.error } 
        default: 
            return state 
    }
}

export const signUpUser = (log) => (dispatch)=>{
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }
    fetch('http://localhost:3000/api/v1/signup',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserRequest())
        dispatch(fetchUserSuccess(data.user))
        dispatch(isLoggedIn())
        localStorage.setItem('token', data.jwt)
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export const logInUser = (log) => (dispatch) => {
    const req={
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization': 'Bearer <token>'},
        body: JSON.stringify({user:log})
    }
    fetch('http://localhost:3000/api/v1/signin',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserRequest())
        dispatch(fetchUserSuccess(data.user))
        dispatch(isLoggedIn())
        localStorage.setItem('token', data.jwt)
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export const loadUser = () => async (dispatch) => {

    const req={
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    await fetch('http://localhost:3000/api/v1/loggedin',req)
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchUserRequest())
        dispatch(fetchUserSuccess(data.user))
        dispatch(isLoggedIn())
    })
    .catch(error=>{
        dispatch(fetchUserFailure(error.message))
    })
}

export default currentUserReducer