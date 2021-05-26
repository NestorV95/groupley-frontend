import {fetchListRequest, fetchListFailure} from './fetchList'

const removeList = list => {
    return {
        type: 'REMOVE_LIST',
        list: list
    }
}

const deleteList = sList => async (dispatch, getState) => {
    dispatch( fetchListRequest() )

    const state = getState()
    const {selectedGroup} = state.groupState
    console.log("1st",sList)

    const req = {
        method: "DELETE",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    await fetch(`http://localhost:3000/api/v1/groups/${selectedGroup.id}/lists/${sList.id}`,req)
    dispatch(removeList(sList))
}

export default deleteList