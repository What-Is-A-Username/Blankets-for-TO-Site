import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import LinkSharing from '../components/link-sharing'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import updateListStyles from '../page-styles/index.module.css'
import styles from '../templates/blog-post.module.css'

import { BlogTagBar } from '../components/tag'

class BlogPostTemplate extends React.Component {

	render() {
		const post = get(this.props, 'data.contentfulBlogPost')
		const posts = get(this, 'props.data.allContentfulBlogPost.edges')

		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
					<img src={fields.file['en-US'].url}
						style={{
							width: fields.file['en-US'].details.image.width,
						}}
						alt={fields.description}
					/>,
			},
		};

		const requiredHead = [
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>,
			<div id="fb-root"></div>,
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="mMCLlyqT">
			</script>,
		]

		return (
			<Layout location={this.props.location}>
				<div className="white-background">
					<SEO title={post.title} metaType={`article`}
						description={`${post.publishDate} - ${post.description.childMarkdownRemark.rawMarkdownBody}`}
						childElements={requiredHead}
					>
						
					</SEO>
					<div className="wrapper">
						<h1 className={styles.title}>{post.title}</h1>
						<p className={styles.publishDate}> {post.publishDate} </p>
						<BlogTagBar tags={post.tags} clickable={true}></BlogTagBar>
						<div className="richText">
							{post.richTextBody != null ? documentToReactComponents(post.richTextBody.json, options) : <p>Error: Article not found.</p>}
						</div>
						<LinkSharing location={'https://blanketsforto.ca/blog/' + post.slug} />
						<hr className={styles.horizontalLine}></hr>
						{/* Updates */}
						<ArticlePreview excludeSlug={post.slug}></ArticlePreview>
					</div>
				</div>
			</Layout>
		)
	}
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		contentfulBlogPost(slug: { eq: $slug }) {
				title
				tags
				slug
				richTextBody {
						json
				}
				publishDate(formatString: "MMMM Do, YYYY")      
				description {
					childMarkdownRemark {
						html
						rawMarkdownBody
					}
				}
		}
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
					}
				}
			}
	}
`
