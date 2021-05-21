import {useDispatch} from 'react-redux'
import {selectList} from "../redux/actions/selectedListAction"

const ListIndexCard = ({list}) =>{
    const dispatch = useDispatch()
    const select = () =>{
        console.log(list)
        dispatch(selectList(list))
    }
    return(
        <li onClick={()=>select()}>{list.title}</li>
    )
}

export default ListIndexCard