// import updateLists from '../Lists/selectedList/updateLists'
import updateList from '../Lists/selectedList/updateList'

const removeListItem = item => {
    return {
        type: 'REMOVE_LIST_ITEM',
        list_item: item
    }
}

const deleteListItem = ( item ) => async ( dispatch )=>{
 
    const req = {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    fetch( `http://localhost:3000/api/v1/list_items/${item.id}` , req )
    
    dispatch( removeListItem( item ) )
   
    dispatch( updateList( item ) )
}

export default deleteListItem