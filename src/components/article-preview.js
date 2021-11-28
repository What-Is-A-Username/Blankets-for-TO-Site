import React from 'react'
import { Link, StaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'
import { BlogTagBar } from './blog_search/tag'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import StyledButton from './styled-button'
import ArticleCard from './article-card' 


const renderFunc = (articles, excludeSlug) => {

	let rendered = 0; 
	const increment = (articleNode) =>
	{
		rendered++; 
		return <ArticleCard article={articleNode.node} key={articleNode.node.title}/>
	}

	return (
		<div className={styles.updates}>
			<Bounce left>
				<h2>Keep updated with our latest articles</h2>
			</Bounce>
			<Fade>
			<div className={styles.previewParent}>
				{articles.map((article, index) => {
					return (
						article.node.slug === excludeSlug || rendered >= 3 ?
						null :  
						increment(article)
					)
				})}
			</div>
			</Fade>
			<Fade delay={500}>
				<StyledButton buttonText='Browse all updates' link='/blog'/>
			</Fade>
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
										fluid(maxHeight: 400, maxWidth: 400, resizingBehavior: PAD) {
											...GatsbyContentfulFluid_tracedSVG
										}
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


