import React,{useState, useEffect} from 'react'

const CurrentDateTime = () =>{
    const today = new Date();
    const [ time , setTime ] = useState( today )

    useEffect(()=>{
        const timer = setInterval( () => {
        setTime( new Date() )
        }, 1000 );
        return ()=>{
            clearInterval( timer )
        }
    },[])

    const wmdy = time.toLocaleDateString('en',{ 
        weekday: 'short',
        month:'short',
        day:'2-digit',
        year:'numeric'
    })

    const hhmm = time.toLocaleTimeString('en',{
        hour:'2-digit', 
        minute:'2-digit'
    })

    return(
        <p className="sum-cdt" >{ `${ wmdy } ${ hhmm }` }</p>
    )
}

export default CurrentDateTime
