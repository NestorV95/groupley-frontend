// import {fetchGroupsRequest, fetchGroupsSuccess, fetchGroupsFailure} from './fetchGroups'
// import selectGroup from './selectedGroup/selectGroup'

// const loadGroups = () => async (dispatch) => {

//     const req = {
//         method: 'GET',
//         headers: {
//             'Content-Type':'application/json',
//             'Accept':'application/json', 
//             'Authorization': `Bearer ${localStorage.getItem("token")}`
//         }
//     }

//     await fetch(`http://localhost:3000/api/v1/user/groups`, req )
//     .then(res=>res.json())
//     .then((data)=>{
//         const {groups} = data
//         dispatch(fetchGroupsRequest())
//         dispatch(fetchGroupsSuccess(groups))
//         const group = groups[0]
//         dispatch(selectGroup(group))
//     })
//     .catch(error=>{
//         dispatch(fetchGroupsFailure(error.message))
//     })
// }

// export default loadGroups