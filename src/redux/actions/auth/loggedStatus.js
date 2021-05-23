const loggedStatus = status => {
    return {
        type: 'LOGGED_STATUS',
        isLogged: status
    }
}

export default loggedStatus