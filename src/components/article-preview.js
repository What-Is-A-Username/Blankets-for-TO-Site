import React from 'react'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ articles }) => (
  <div className={styles.previewParent}>
    {
      articles.map(( article ) => { return(
        <a onClick={() => navigate(`/blog/${article.node.slug}`)} className={styles.alink} key={article.node.title}>
          <div className={styles.preview} >
              <h3 className={styles.previewTitle}>{article.node.title}</h3>
              <small className={styles.previewPublishDate}>{article.node.publishDate}</small>
              <div className={styles.previewDescription}
              dangerouslySetInnerHTML={{
                  __html: article.node.description.childMarkdownRemark.html,
              }} 
              />
          </div>
        </a>
      )})}
  </div>
)
