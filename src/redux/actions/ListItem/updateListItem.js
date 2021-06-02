
import updateLists from '../Lists/selectedList/updateLists'

export const UpdateListItem = item => {
    return{
        type: 'UPDATE_LIST_ITEM',
        item: item
    }
}

export const editListItem = (info) => async (dispatch, getState) =>{
    const state = getState()
    const {selectedList} = state.listsState

    const newListItems = selectedList.list_items.map(item => item.id === info.id ? info : item)

    const updatedList = {
        ...selectedList,
        list_items: newListItems
    }

    const req={
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify( { list_item: info} )
    }
    
    fetch(`http://localhost:3000/api/v1/list_items/${info.id}`,req)
    .then(res=>res.json())
    .then(({list_item})=>{
        dispatch(UpdateListItem(list_item))
        dispatch(updateLists(updatedList))
    })
}