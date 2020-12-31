import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './blog-list.module.css'

export default ({ article }) => (
    <a href={`/blog/${article.slug}`} className={styles.alink} key={article.title}>
        <div className={styles.preview} >
            <h3 className={styles.previewTitle}>{article.title}</h3>
            <small className={styles.previewPublishDate}>{article.publishDate}</small>
            <p
            dangerouslySetInnerHTML={{
                __html: article.description.childMarkdownRemark.html,
            }} style={{color: "black"}}
            />
        </div>
  </a>
)
