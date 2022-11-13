import React from 'react'
import PropTypes from 'prop-types'
import BlogTagItem from './blog-tag-item'

import {blogTagContainer} from './blog-tag-bar.module.css'
const BlogTagBar = ({tags, clickable}) => {

    tags = tags === null ? [] : tags.sort()

    return(
        <div className={blogTagContainer}>
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

export default BlogTagBar