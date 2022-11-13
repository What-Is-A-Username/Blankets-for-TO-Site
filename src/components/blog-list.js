import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import BlogTagBar from './blog_search/blog-tag-bar'
import { alink, preview, previewImage, previewTitle, previewPublishDate, previewDescription } from './blog-list.module.css'

export default ({ article }) => (
    <a href={`/blog/${article.slug}`} className={alink} key={article.title}>
        <div className={preview}>
            <div className={previewImage}>
                <GatsbyImage image={article.imagePreview.gatsbyImageData} alt={article.imagePreview.description}/>
            </div>
            <div>
                <h3 className={previewTitle}>{article.title}</h3>
                <BlogTagBar tags={article.tags ?? []} clickable={false} />
                <small className={previewPublishDate}>{article.publishDate}: {article.articleType} by {article.authorName}</small>
                <div className={previewDescription}
                    dangerouslySetInnerHTML={{
                        __html: article.description.childMarkdownRemark.html,
                    }} />
            </div>
        </div>
  </a>
)

