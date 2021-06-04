import React from 'react' //, { useState }

import { FaSearch } from 'react-icons/fa'

const SearchGroupForm = ({search, searchUp}) => {

    return (
        <div className="group-tile group-text search">
            
            <p className="search-text">Search existing groups by their group code </p>
            <p className="si-p">
            <span>
                <input 
                    className="group-text search-input" 
                    required type="text" 
                    value={search} 
                    onChange={ e =>searchUp(e.target.value)} 
                    placeholder="Name"
                />
            </span>

            <span>
                <button className="search-btn" >
                    <FaSearch className="group-icon"/>
                </button>
            </span>
            </p>

        </div>
    )
}

export default SearchGroupForm
