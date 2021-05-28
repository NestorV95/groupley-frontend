export const auth = status => {
    return {
        type: 'AUTH_STATUS',
        status: status
    }
}

const token = localStorage.getItem('token')

const tokenStatus = token? true : false

const tokenValid =  (token === undefined)? false : true

export const authenticated =  (tokenStatus === true && tokenValid === true)? true : false


export const authStatus = () => (dispatch) => {
    authenticated === true ? dispatch( auth(true) ) : dispatch( auth(false) )
}

