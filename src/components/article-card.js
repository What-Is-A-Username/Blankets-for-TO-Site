import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Animation from '../components/animate/animation';
import { cardParent, alink, preview, previewImage, previewText, previewArticleType, previewTitle, previewPublishDate } from './article-preview.module.css'

const ArticleCard = ({ article, index }) => {
	return (
		<div className={cardParent}>
			<a href={`/blog/${article.slug}`} className={alink} key={article.title}>
				<Animation fade animationDelay={700 * index} className={alink}>
					<div className={preview}>
						<div className={previewImage}>
							{article.imagePreview != null ?
								<GatsbyImage image={article.imagePreview.gatsbyImageData} alt={article.imagePreview.description} />
								:
								null}
						</div>
						<div className={previewText}>
							<small className={previewArticleType}>{article.articleType}</small>
							<h3 className={previewTitle}>{article.title}</h3>
							<small className={previewPublishDate}>{article.publishDate}</small>
						</div>
					</div>
				</Animation>
			</a>
		</div>
	)
}

export default ArticleCard
