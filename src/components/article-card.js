import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'
import Fade from 'react-reveal/Fade'

const ArticleCard = ({article, index}) => {
	return (
		<Fade delay={500*index} >
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
		</Fade>
    )
}

export default ArticleCard
