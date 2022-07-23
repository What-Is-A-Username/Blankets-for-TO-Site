import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Animation from '../components/animate/animation';
import * as styles from './article-preview.module.css'

const ArticleCard = ({article, index}) => {
	return (
		<a href={`/blog/${article.slug}`} className={styles.alink} key={article.title}>
				<Animation fade animationDelay={700 * index} style={{maxWidth: '300px'}} className={styles.alink}>
				<div className={styles.preview}>
					<div className={styles.previewImage}>
						{article.imagePreview != null ?
							<GatsbyImage image={article.imagePreview.gatsbyImageData} alt={article.imagePreview.description} />
							:
							null}
					</div>
					<div className={styles.previewText}>
						<small className={styles.previewArticleType}>{article.articleType}</small>
						<h3 className={styles.previewTitle}>{article.title}</h3>
						<small className={styles.previewPublishDate}>{article.publishDate}</small>
					</div>
				</div>
		</Animation>
			</a>
    )
}

export default ArticleCard
