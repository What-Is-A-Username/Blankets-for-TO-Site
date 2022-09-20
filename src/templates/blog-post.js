import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import LinkSharing from '../components/link-sharing'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as styles from '../templates/blog-post.module.css'

import { BlogTagBar } from '../components/blog_search/tag'

import CaptionedFigure from '../components/blog_embeds/captioned-figure'
import readingTime from 'reading-time'
import QuestionEmbed from '../components/blog_embeds/question'
import GalleryEmbed from '../components/blog_embeds/gallery'

class BlogPostTemplate extends React.Component {

	concatenateText = (jsonText) => {
		var paragraphs = jsonText.content.filter(x => x.nodeType === 'paragraph').map(x => x.content).flat(1)
		var getRawText = (obj) => {
			if (obj.nodeType === 'text') return(obj.value)
			else if (obj.nodeType === 'hyperlink') {
				var linkText = obj.content.filter(x => x.nodeType === 'text')[0].value
				return(linkText)
			}
		}
		var textList = paragraphs.map(x => getRawText(x))
		var concatStr = textList.join(' ')
		return(concatStr)
	}

	render() {
		const post = get(this.props, 'data.contentfulBlogPost')
		const richTextBodyJSON = JSON.parse(post.richTextBody.raw)
		const timeToRead = readingTime(this.concatenateText(richTextBodyJSON)).minutes

		const assets = new Map(post.richTextBody.references.map(ref => [ref.contentful_id,ref]))
		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: node => {
					const data = assets.get(node.data.target.sys.id)
					if (data.file.contentType.startsWith('image/')) {
						return(<CaptionedFigure gatsbyImageData={data.gatsbyImageData} title={data.title} description={data.description}/>)
					}
				},
				[BLOCKS.EMBEDDED_ENTRY]: node => {
					const data = assets.get(node.data.target.sys.id)
					if (data.internal.type === 'ContentfulEmbeddedQuestion') {
						return(<QuestionEmbed data={data}/>)
					} else if (data.internal.type === 'ContentfulGalleryEmbed') {
						return(<GalleryEmbed data={data}/>)
					}
				}
			},
		};

		const requiredHead = [
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8" key="twitter-widget"></script>,
			<div id="fb-root" key="fb-root"></div>,
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="9bOR49xF" key="facebook-widget"></script>,
		]

		return (
			<Layout location={this.props.location}>
				<div className="white-background">
					<SEO
						title={post.title}
						metaType='article'
						description={`${post.publishDate} - ${post.description.childMarkdownRemark.rawMarkdownBody}`}
						childElements={requiredHead}
						metaImage={post.socialMediaLinkPreview.file.url}
						doNotCrawl={Boolean(post.previewOnly)}
					/>
					<div className="wrapper">
						<h1 className={styles.title}>{post.title}</h1>
						<BlogTagBar tags={post.tags} clickable={true}></BlogTagBar>
						<p className={styles.publishDate}>{`by ${post.authorName} on ${post.publishDate}`}</p>
						<p className={styles.publishDate}>{`Estimated reading time: ${timeToRead} minute` + (timeToRead !== 1 ? 's' : '')}</p>
						<div className={'richText ' + styles.bodyParent}>
							<div className={styles.body}>
								{post.richTextBody != null ? documentToReactComponents(richTextBodyJSON, options) : <p>Error: Article not found.</p>}
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
				raw
				references {
					... on ContentfulAsset {
						description
						title
						file {
							contentType
						}
						gatsbyImageData(
							layout: CONSTRAINED
							width: 760
							quality: 100
						)
						contentful_id
					}
					... on ContentfulEmbeddedQuestion {
						contentful_id 
						id
						answer
						options
						question
						internal {
							type
						}
					}
					... on ContentfulGalleryEmbed {
						contentful_id
						id
						displayTitle
						displayDescription {
						  	displayDescription
						}
						images {
						  gatsbyImageData(
							backgroundColor: "#000000ff"
							layout: CONSTRAINED
							resizingBehavior: PAD
							aspectRatio: 1.5
							quality: 100
						  )
						}
						internal {
							type
						}
					}
				}
			}
			articleType
			publishDate(formatString: "MMMM Do, YYYY")      
			description {
				childMarkdownRemark {
					html
					rawMarkdownBody
				}
			}
			socialMediaLinkPreview {
				file {
					url
				}
			}
			previewOnly
		}
	}
`
