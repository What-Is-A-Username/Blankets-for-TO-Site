import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {filterContainer, dropdown, filterTitle, activeTagContainer} from './search-tools.module.css'
import SearchTagItem from './search-tag-item';


const SearchTools = ({tags, clickTagFunc, activeTags, onDropdownChange, dropdownPlaceholder}) => {

    const inactiveTags = tags.filter(tag => !activeTags.includes(tag));
    inactiveTags.sort();
    activeTags.sort();
    tags = activeTags.concat(inactiveTags);

    const options = [
        {value: 'recent', label: 'Date (Recent First)'},
        {value: 'oldest', label: 'Date (Oldest First)'},
        {value: 'titleaz', label: 'Title (A-Z)'},
        {value: 'titleza', label: 'Title (Z-A)'},
    ]

    return(
        <div className={filterContainer}>
            <div className={dropdown}>
                <label className={filterTitle}>
                    Sort by<br/>
                <select onChange={onDropdownChange} value={dropdownPlaceholder}>
                    {options.map(x => {
                        return(<option value={x.value} key={x.label}>{x.label}</option>)
                    })}
                </select>
                </label>
            </div>
            <p className={filterTitle}>Filter by</p>
            <div className={activeTagContainer}>
            {
                tags.map(tagText => {
                    var active = activeTags.includes(tagText); 
                    return(<SearchTagItem active={active} tagText={tagText} clickTagFunc={clickTagFunc} key={tagText}/>)
                })
            }
            </div>
        </div>
    )
}

SearchTools.propTypes = {
    onDropdownChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    clickTagFunc: PropTypes.func.isRequired,
    dropdownPlaceholder: PropTypes.string.isRequired,
}

export default SearchTools
