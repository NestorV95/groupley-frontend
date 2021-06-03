import updateLists from '../Lists/selectedList/updateLists'
import updateList from '../Lists/selectedList/updateList'

const createListItem = ( info ) => async (dispatch, getState)=>{
    const {list, item} = info

    const req={
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify( {list_item: item} )
    }

    fetch('http://localhost:3000/api/v1/list_items',req)
    .then( res => res.json() )
    .then( ({list_item}) => {

        const updatedList = {
            ...list,
            list_items: [...list.list_items, list_item]
        }

        console.log(updatedList)

        dispatch( updateList( list_item ) )
        dispatch( updateLists( updatedList ) )
    })
   
}



export default createListItem