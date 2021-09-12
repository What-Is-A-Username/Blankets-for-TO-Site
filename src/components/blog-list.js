import React from 'react'
import { Link, navigate } from 'gatsby'
import { BlogTagBar } from './blog_search/tag'

import styles from './blog-list.module.css'

export default ({ article }) => (
    <a onClick={() => navigate(`/blog/${article.slug}`)} className={styles.alink} key={article.title}>
        <div className={styles.preview}>
            <div className={styles.previewImage}>
                <img src={article.imagePreview.fixed.src} alt={article.imagePreview.description}/>
            </div>
            <div>
                <h3 className={styles.previewTitle}>{article.title}</h3>
                <BlogTagBar tags={article.tags} clickable={false} />
                <small className={styles.previewPublishDate}>{article.publishDate}: {article.articleType} by {article.authorName}</small>
                <div className={styles.previewDescription}
                    dangerouslySetInnerHTML={{
                        __html: article.description.childMarkdownRemark.html,
                    }} />
            </div>
        </div>
  </a>
)

