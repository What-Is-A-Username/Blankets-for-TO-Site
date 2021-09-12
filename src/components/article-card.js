import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'

const ArticleCard = ({article}) => {
	return (
		<a onClick={() => navigate(`/blog/${article.slug}`)} className={styles.alink} key={article.title}>
			<div className={styles.preview}>
				<div className={styles.previewImage}>
					{article.imagePreview != null ?
						<Img fluid={article.imagePreview.fluid} alt={article.imagePreview.description} />
						:
						null}
				</div>
				<div className={styles.previewText}>
					<small className={styles.previewArticleType}>{article.articleType}</small>
					<h3 className={styles.previewTitle}>{article.title}</h3>
					<small className={styles.previewPublishDate}>{article.publishDate}</small>
				</div>
			</div>
		</a>
    )
}

export default ArticleCard
