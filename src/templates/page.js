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
import CaptionedFigure from '../components/blog_embeds/captioned-figure'

class PageTemplate extends React.Component {

	render() {
		const post = get(this.props, 'data.contentfulPage')
		
		const assets = new Map(post.richTextBody.references.map(ref => [ref.contentful_id,ref]))
		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: node => {
					const data = assets.get(node.data.target.sys.id)
					if (data.file.contentType.startsWith('image/')) {
						return(<CaptionedFigure gatsbyImageData={data.gatsbyImageData} title={data.title} description={data.description}/>)
					}
				},
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
						description={post.description.childMarkdownRemark.rawMarkdownBody}
						childElements={requiredHead}
						doNotCrawl={!post.enableSearchCrawling}
						metaImage={post.imagePreview.file.url}
					/>
					<div className="wrapper" >
						<h1 className={styles.title}>{post.title}</h1>
						<div className="richText" styles={{maxWidth: '800px'}}>
							{post.richTextBody != null ? documentToReactComponents(JSON.parse(post.richTextBody.raw), options) : <p>Error: Article not found.</p>}
						</div>
						<LinkSharing location={'https://blanketsforto.ca/blog/' + post.slug} />
						<hr className={styles.horizontalLine}></hr>
						<ArticlePreview excludeSlug={post.slug}></ArticlePreview>
					</div>
				</div>
			</Layout>
		)
	}
}

export default PageTemplate

export const DynamicPageQuery = graphql`
	query PageBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		contentfulPage(slug: { eq: $slug }) {
			title
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
						)
						contentful_id
					}
				}
			}
			description {
				childMarkdownRemark {
					html
					rawMarkdownBody
				}
			}
			enableSearchCrawling
			imagePreview {
				file {
					url
				}
			}
		}
	}
`
