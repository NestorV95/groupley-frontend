import React,{useState} from 'react'
import GetUser from '../helpers/GetUser.js'

const LogIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const HandleSubmit=()=>{
        const log={username: username,password: password}
        GetUser(log)
    }

    return (
        <div>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/> <br/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/> <br/>
            <button onClick={()=>HandleSubmit()}>log in</button>
        </div>
    )
}

export default LogIn
