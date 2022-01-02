import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const SearchBar = ({ url }) => {
    const navigate = useNavigate()

    const [searchText, setSearchText] = useState("")
    const navigateTo = (e) => {
        if (e.keyCode === 13)
            navigate(`${url}${searchText}`, { state: searchText })
    }

    return (
        <div className="searchContainer">
            <img className="searchImg" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" alt="search-bar" />
            <input className="searchInput"
                onKeyDown={navigateTo}
                type="text"
                placeholder="Search from high resolution photos"
                onChange={e => setSearchText(e.target.value)} value={searchText}
            />

        </div>
    )
}

export default SearchBar