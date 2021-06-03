import React from 'react'// , {useEffect}
import { useSelector} from 'react-redux' //useDispatch,

// import loadGroup from '../redux/actions/groups/selectedGroup/loadGroup'

import Loading from '../Shared/Loading.js'
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
import GroupTiles from './Tiles/GroupTiles.js'

import './Group.css'

const GroupLayout = (props) => {
    // const dispatch = useDispatch()
    const {loading, currentUser} = useSelector(state => state.currentUserState)
    // const {groups} = useSelector(state => state.groupState)
    // const code = props.location.pathname.split("/")[2]

    // useEffect(()=>{
    //     const select = groups.find(group=> group.code === code)
    //     console.log(select)
    //     dispatch(loadGroup(select))
    //     // eslint-disable-next-line
    // },[select])

    return (
        <>
            <Logo />
            <Groupley />
            { currentUser === null && loading?
                <Loading />
                :
                <div className="window">
                    <MainMenu />
                    <GroupTiles /> 
                </div>
            }
        </>
    )
}

export default GroupLayout
