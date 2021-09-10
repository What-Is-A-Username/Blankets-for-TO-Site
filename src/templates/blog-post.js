import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import LinkSharing from '../components/link-sharing'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../templates/blog-post.module.css'

import { BlogTagBar } from '../components/blog_search/tag'

class BlogPostTemplate extends React.Component {

	render() {
		const post = get(this.props, 'data.contentfulBlogPost')

		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
				{
					var originalImage = fields.file['en-US'].details.image
					var width = Math.min(originalImage.width, 760)
					var imgUrl = 'https:' + fields.file['en-US'].url + '?w=' + String(width);
					var imgHeight = originalImage.height / (originalImage.width / width)
					return(
					<img src={imgUrl}
						style={{
							// width: fields.file['en-US'].details.image.width,
							width: width,
							height: imgHeight
						}}
						alt={fields.description}
					/>)
				}
			},
		};

		const requiredHead = [
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>,
			<div id="fb-root"></div>,
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="9bOR49xF"></script>,
		]

		return (
			<Layout location={this.props.location}>
				<div className="white-background">
					<SEO 
						title={post.title} 
						metaType='article'
						description={`${post.publishDate} - ${post.description.childMarkdownRemark.rawMarkdownBody}`}
						childElements={requiredHead}
						metaImage={post.imagePreview.fluid.src}
						// doNotCrawl={post.articleType === 'Article'}
						doNotCrawl={Boolean(post.previewOnly)}
					/>
					<div className="wrapper">
						<h1 className={styles.title}>{post.title}</h1>
						<BlogTagBar tags={post.tags} clickable={true}></BlogTagBar>
						<p className={styles.publishDate}>by {post.authorName}</p>
						<p className={styles.publishDate}>{post.publishDate}</p>
						<div className={'richText ' + styles.bodyParent}>
							<div className={styles.body}>
							{post.richTextBody != null ? documentToReactComponents(post.richTextBody.json, options) : <p>Error: Article not found.</p>}
							</div>
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
			authorName
			tags
			slug
			richTextBody {
				json
			}
			articleType
			publishDate(formatString: "MMMM Do, YYYY")      
			description {
				childMarkdownRemark {
					html
					rawMarkdownBody
				}
			}
			imagePreview {
				fluid(maxWidth: 400, maxHeight: 400, resizingBehavior: PAD, background: "rgb:ffffff") {
					src
				}
			}
			previewOnly
		}
	}
`
