import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import * as styles from './article-preview.module.css'
import PropTypes from 'prop-types'
import StyledButton from './styled-button'
import ArticleCard from './article-card' 
import Animation from '../components/animate/animation'

const renderFunc = (articles, excludeSlug) => {

	let rendered = 0; 
	const increment = (articleNode, index) =>
	{
		rendered++; 
		return <ArticleCard article={articleNode.node} key={articleNode.node.title} index={index}/>
	}

	return (
		<div className={styles.updates}>
			<Animation bounce left>
				<h2 className={styles.title}>Keep updated with our latest articles</h2>
			</Animation>
			<div className={styles.previewParent}>
				{articles.map((article, index) => {
					return (
						article.node.slug === excludeSlug || rendered >= 3 ?
						null :  
						increment(article, index)
					)
				})}
			</div>
			<Animation fade animationDelay={500}>
				<StyledButton buttonText='Browse all updates' link='/blog'/>
			</Animation>
		</div>)
}

export const ArticlePreview = ({excludeSlug}) => {
	return (
		<StaticQuery
			query={
				graphql`
					query ArticlePreviewQuery {
						
						allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 4, filter: {previewOnly: {ne: true}}) {
							edges {
								node {
									title
									slug
									publishDate(formatString: "MMMM Do, YYYY")      
									description {
										childMarkdownRemark {
											html
										}
									}
									articleType
									tags
									imagePreview {
										gatsbyImageData(
											layout: FULL_WIDTH
											placeholder: BLURRED
										)
										description
									}
								}
							}
						}
					}
						`
			}
			render={data => renderFunc(data.allContentfulBlogPost.edges, excludeSlug)}
		/>
	)
};

ArticlePreview.propTypes = {
	excludeSlug: PropTypes.string, 
}

ArticlePreview.defaultProps = { 
	excludeSlug: "", 
}

export default ArticlePreview


