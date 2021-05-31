import {fetchGroupRequest, fetchGroupSuccess, fetchGroupFailure} from './fetchGroup'
import loadLists from '../../Lists/loadLists'
import selectGroup from './selectGroup'
import { groupStatus } from './groupStatus'

const loadGroup = (group) => async (dispatch) => {
    dispatch(fetchGroupRequest())
    const req = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    await fetch(`http://localhost:3000/api/v1/groups/${group.id}`, req )
    .then(res=>res.json())
    .then(({group})=>{
        const {id, image, name, code, users} = group
        const loadedGroup={
            id: id,
            image: image,
            name: name,
            code: code,
            users: users
        }
        dispatch( fetchGroupSuccess( loadedGroup ) )
        dispatch( selectGroup( loadedGroup ) )
        dispatch( loadLists( loadedGroup ) )
        dispatch( groupStatus(true) )
    })
    .catch(error=>{
        dispatch(fetchGroupFailure(error.message))
    })
}

export default loadGroup