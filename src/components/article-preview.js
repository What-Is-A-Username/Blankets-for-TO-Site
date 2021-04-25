import React from 'react'
import { Link, StaticQuery, graphql, navigate } from 'gatsby'
import styles from './article-preview.module.css'
import { BlogTagBar } from './tag'
import PropTypes from "prop-types"


const renderFunc = (articles, excludeSlug) => {
	return (
		<div className={styles.updates}>
			<h2>Keep updated with our latest events</h2>
			<div className={styles.previewParent}>
				{articles.map((article) => {
					return (
						article.node.slug === excludeSlug ?
						null :  
						<a onClick={() => navigate(`/blog/${article.node.slug}`)} className={styles.alink} key={article.node.title}>
							<div className={styles.preview} >
								<div className={styles.previewImage}>
									{article.node.imagePreview != null ?
										<img src={article.node.imagePreview.fixed.src} alt={article.node.imagePreview.description} />
										:
										<img src={""} alt={"Image not found."} />
									}
								</div>
								<div>
									<h3 className={styles.previewTitle}>{article.node.title}</h3>
									<small className={styles.previewPublishDate}>{article.node.publishDate}</small>
									<BlogTagBar tags={article.node.tags} clickable={false}/>
									<div className={styles.previewDescription}
										dangerouslySetInnerHTML={{
											__html: article.node.description.childMarkdownRemark.html,
										}}
									/>
								</div>
							</div>
						</a>
					)
				})}
			</div>
			<Link to="/blog" className='links'>
				<button className='btn' type="submit">Browse all updates</button>
			</Link>
		</div>)
}

export const ArticlePreview = ({excludeSlug}) => {
	return (
		<StaticQuery
			query={
				graphql`
					query ArticlePreviewQuery {
						allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3, filter: {articleType: {ne: "Page"}}) {
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
										fixed(
											width: 300
											height: 300
											quality: 0
											resizingBehavior: FILL
											background: "rgb:000000"
											) {
												src
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

ArticlePreview.PropTypes = {
	excludeSlug: PropTypes.string, 
}

ArticlePreview.defaultProps = { 
	excludeSlug: "", 
}

export default ArticlePreview