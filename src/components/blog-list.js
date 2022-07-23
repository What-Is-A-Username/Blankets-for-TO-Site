import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BlogTagBar } from './blog_search/tag'

import * as styles from './blog-list.module.css'

export default ({ article }) => (
    <a href={`/blog/${article.slug}`} className={styles.alink} key={article.title}>
        <div className={styles.preview}>
            <div className={styles.previewImage}>
                <GatsbyImage image={article.imagePreview.gatsbyImageData} alt={article.imagePreview.description}/>
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

