import React from 'react'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'

import styles from './blog-list.module.css'

export default ({ article }) => (
    <a onClick={() => navigate(`/blog/${article.slug}`)} className={styles.alink} key={article.title}>
        <div className={styles.preview} >
            <h3 className={styles.previewTitle}>{article.title}</h3>
            <small className={styles.previewPublishDate}>{article.publishDate}</small>
            <div className={styles.previewDescription}
            dangerouslySetInnerHTML={{
                __html: article.description.childMarkdownRemark.html,
            }} 
            />
        </div>
  </a>
)
