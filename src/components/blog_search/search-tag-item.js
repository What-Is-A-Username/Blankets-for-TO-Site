import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {activeTag, selectedTag, unselectedTag, selectTagButton } from './search-tag-item.module.css'

const SearchTagItem = ({tagText, clickTagFunc, active}) => {

    const [refresh, setRefresh] = useState(false);
    const remove_tag_char = "\u2716";
    const add_tag_char = '\uFF0B'

    const onTagClick = (tagText) => 
    {
        clickTagFunc(tagText);
        setRefresh(!refresh);
    }

    return(
        <div className={activeTag + ' ' + (active ? selectedTag : unselectedTag)}>
            <p>{tagText}</p>
            <p className={selectTagButton} onClick={() => onTagClick(tagText)}>{active ? remove_tag_char : add_tag_char}</p>
        </div>
    )
}

SearchTagItem.propTypes = {
    tagText: PropTypes.string.isRequired,
    clickTagFunc: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
}

export default SearchTagItem