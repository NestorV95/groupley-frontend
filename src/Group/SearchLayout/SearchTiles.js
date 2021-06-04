import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import ResultsTile from './ResultsTile'
import SearchGroupForm from './SearchGroupForm'

const SearchTiles = () => {
    const {allGroups} = useSelector( state => state.groupState )
    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        setResults(allGroups)
        // eslint-disable-next-line
    },[])

    const handleSearch = value =>{
        setSearch(value)   
        setResults( allGroups.filter( group => group.code.includes( value ) ) )
    }

    return (
        <div className="win-tiles" >
            <SearchGroupForm search={search} searchUp={handleSearch}/>
            { allGroups !== null && <ResultsTile results={results}/>}

        </div>
    )
}

export default SearchTiles
