export const setAllGroups = groups =>{
    return{
        type: 'SET_ALL_GROUPS',
        groups: groups
    }
}

const allGroups = () => async (dispatch) => {
    const req = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    await fetch('http://localhost:3000/api/v1/groups', req )
    .then( res => res.json() )
    .then(  data =>{
        dispatch(setAllGroups(data))
    })
}

export default allGroups