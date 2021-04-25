import React, {setState, useState} from 'react'
import PropTypes from 'prop-types'
import styles from './tag.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { navigate } from 'gatsby-link';

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

const BlogTagItem = ({tagText, clickable}) => {
    return(
        <div className={clickable ? styles.clickableBlogTag : styles.blogTag} onClick={clickable ? () => navigate("/blog/?tags=" + tagText) : () => {}}>
            <p>{tagText}</p>
        </div>
    )
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
    // find placeholder option
    var defaultIndex = options.findIndex(option => option.value === dropdownPlaceholder);
    const defaultOption = defaultIndex >= 0 ? options[defaultIndex] : options[0]; 

    return(
        <div className={styles.filterContainer}>
            <p className={styles.filterTitle}>Sort by</p>
            <Dropdown onChange={onDropdownChange} className={styles.dropdownRoot} arrowClassName={styles.dropdownArrow} options={options} value={defaultOption} placeholder="Select an option" />
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

SearchTagItem.propTypes = {
    tagText: PropTypes.string.isRequired,
    clickTagFunc: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
}

SearchTools.propTypes = {
    onDropdownChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    clickTagFunc: PropTypes.func.isRequired,
    dropdownPlaceholder: PropTypes.string.isRequired,
}

const BlogTagBar = ({tags, clickable}) => {
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