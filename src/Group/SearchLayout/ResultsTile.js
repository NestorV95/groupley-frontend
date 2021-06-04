import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import selectGroup from '../../redux/actions/groups/selectedGroup/selectGroup'

const ResultsTile = ({results}) => {
    const {selectedGroup} = useSelector(state => state.groupState)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()

    // const [selection, setSelection] = useState({})

    // useEffect(()=>{
    //     if(selectedGroup.code === code){
    //         setSuccess(true)
    //     }
    // },[selectedGroup,code])

    const handleSelection = group => {
        dispatch(selectGroup(group))
        setSuccess(true)
    }

    return (
        <>
       { success ? 
            <Redirect to={`/groups/${selectedGroup.code}`} />
            :
            <div className="group-tile group-text result-outer">
                <p className="result-tt">Results</p>
                <div className="result-inner">
                    <ul className="result-ul">
                        {results !== null && results.length > 0 && results.map(group =>{
                            return (
                                <li className="result-li" onClick={()=>handleSelection(group)}>
                                    <div className="rimg-div">
                                        <img className="result-img" src={group.image} alt={group.code}/>
                                    </div>
                                    <div className="rp-div">
                                        <p className="result-p">{group.name}</p>
                                        <p className="result-p">#{group.code}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        }
        </>
    )
}

export default ResultsTile
