import React from 'react'
import { Link, navigate } from 'gatsby'
import { BlogTagBar } from './tag'

import styles from './blog-list.module.css'

export default ({ article }) => (
    <a onClick={() => navigate(`/blog/${article.slug}`)} className={styles.alink} key={article.title}>
            <div className={styles.preview}>
                <div className={styles.previewImage}>
                    {/* {console.log(article.imagePreview)} */}
                    {article.imagePreview != null?
                    <img src={article.imagePreview.fixed.src} alt={article.imagePreview.description}/>
                    :
                    <img src={""} alt={""}/>
                    }
                </div>
                <div>
                    <h3 className={styles.previewTitle}>{article.title}</h3>
                    <small className={styles.previewPublishDate}>{article.publishDate}</small>
                    <BlogTagBar tags={article.tags}/>
                    <div className={styles.previewDescription}
                        dangerouslySetInnerHTML={{
                            __html: article.description.childMarkdownRemark.html,
                        }} 
                    />
                </div>
            </div>
  </a>
)
