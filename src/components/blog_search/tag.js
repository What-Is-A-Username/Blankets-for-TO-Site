import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as styles from './tag.module.css'

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
        <div className={styles.activeTag + ' ' + (active ? styles.selectedTag : styles.unselectedTag)}>
            <p>{tagText}</p>
            <p className={styles.selectTagButton} onClick={() => onTagClick(tagText)}>{active ? remove_tag_char : add_tag_char}</p>
        </div>
    )
}

SearchTagItem.propTypes = {
    tagText: PropTypes.string.isRequired,
    clickTagFunc: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
}

const BlogTagItem = ({tagText, clickable}) => {
    if (clickable)
    { 
        return(
            <a href={"/blog/?tags=" + tagText} className={styles.clickableBlogTag}>
                <p>{tagText}</p>
            </a>
        )
    }
    else 
    {
        return(
            <div className={styles.blogTag}>
                    <p>{tagText}</p>
            </div>
        )
    }
}

BlogTagItem.propTypes = {
    tagText: PropTypes.string.isRequired,
    clickable: PropTypes.bool.isRequired,
}

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
        <div className={styles.filterContainer}>
            <div className={styles.dropdown}>
                <label className={styles.filterTitle}>
                    Sort by<br/>
                <select onChange={onDropdownChange} value={dropdownPlaceholder}>
                    {options.map(x => {
                        return(<option value={x.value} key={x.label}>{x.label}</option>)
                    })}
                </select>
                </label>
            </div>
            <p className={styles.filterTitle}>Filter by</p>
            <div className={styles.activeTagContainer}>
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


const BlogTagBar = ({tags, clickable}) => {

    tags = tags === null ? [] : tags.sort()

    return(
        <div className={styles.blogTagContainer}>
            {
                tags.map(tagText => {
                    return(<BlogTagItem tagText={tagText} clickable={clickable} key={tagText}/>)
                })
            }   
        </div>
    )
}

BlogTagBar.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    clickable: PropTypes.bool.isRequired,
}

export {
    SearchTools,
    BlogTagBar
}