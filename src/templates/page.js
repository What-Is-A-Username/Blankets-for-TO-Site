import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import LinkSharing from '../components/link-sharing'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../templates/blog-post.module.css'

class PageTemplate extends React.Component {

	render() {
		const post = get(this.props, 'data.contentfulPage')

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
						metaImage={post.imagePreview.fluid.src}
					/>
					<div className="wrapper" >
						<h1 className={styles.title}>{post.title}</h1>
						<div className="richText" styles={{maxWidth: '800px'}}>
							{post.richTextBody != null ? documentToReactComponents(post.richTextBody.json, options) : <p>Error: Article not found.</p>}
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
				json
			}
			description {
				childMarkdownRemark {
					html
					rawMarkdownBody
				}
			}
			enableSearchCrawling
			imagePreview {
				fluid(maxWidth: 1200, maxHeight: 600, resizingBehavior: PAD, background: "rgb:ffffff") {
					src
				}
			}
		}
	}
`
