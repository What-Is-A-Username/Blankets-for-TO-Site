import React from 'react'
import { Link, StaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'
import { BlogTagBar } from './blog_search/tag'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import StyledButton from './styled-button'

const renderFunc = (articles, excludeSlug) => {

	let rendered = 0; 
	const increment = (article) =>
	{
		rendered++; 
		return (
			<a onClick={() => navigate(`/blog/${article.node.slug}`)} className={styles.alink} key={article.node.title}>
			<div className={styles.preview} >
				<div className={styles.previewImage}>
					{article.node.imagePreview != null ?
						<Img fluid={article.node.imagePreview.fluid} alt={article.node.imagePreview.description} />
						:
						null
					}
				</div>
				<div className={styles.previewText}>
					<h3 className={styles.previewTitle}>{article.node.title}</h3>
					{/* <BlogTagBar tags={article.node.tags} clickable={false}/> */}
					<small className={styles.previewPublishDate}>{article.node.publishDate}</small>
					{/* <div className={styles.previewDescription}
						dangerouslySetInnerHTML={{
							__html: article.node.description.childMarkdownRemark.html,
						}}
					/> */}
				</div>
			</div>
		</a>); 
	}

	return (
		<div className={styles.updates}>
			<Bounce left>
				<h2>Keep updated with our latest events</h2>
			</Bounce>
			<Fade>
			<div className={styles.previewParent}>
				{articles.map((article, index) => {
					return (
						article.node.slug === excludeSlug || rendered >= 3 ?
						null :  
						<Fade>
						{increment(article)}
						</Fade>
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
						allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 4, filter: {articleType: {ne: "Page"}}) {
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
									tags
									imagePreview {
										fluid(maxHeight: 800, resizingBehavior: THUMB) {
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