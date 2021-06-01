import {useDispatch} from 'react-redux'
import selectList from "../../redux/actions/Lists/selectedList/selectList"

const ListCard = ({list}) =>{
    const dispatch = useDispatch()

    const select = () =>{
        dispatch(selectList(list))
    }
    
    return(
        <li className="list-text inner-li" onClick={()=>select()}>{list.title}</li>
    )
}

export default ListCard