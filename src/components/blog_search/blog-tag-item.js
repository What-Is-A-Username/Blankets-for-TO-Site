import React from 'react'
import PropTypes from 'prop-types'
import {clickableBlogTag, blogTag } from './blog-tag-item.module.css'

const BlogTagItem = ({tagText, clickable}) => {
    if (clickable)
    { 
        return(
            <a href={"/blog/?tags=" + tagText} className={clickableBlogTag}>
                <p>{tagText}</p>
            </a>
        )
    }
    else 
    {
        return(
            <div className={blogTag}>
                    <p>{tagText}</p>
            </div>
        )
    }
}

BlogTagItem.propTypes = {
    tagText: PropTypes.string.isRequired,
    clickable: PropTypes.bool.isRequired,
}

export default BlogTagItem