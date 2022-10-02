import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import HeaderImage from '../components/header-image'
import ContactForm from '../components/home/contact-form'
import { BLOCKS } from '@contentful/rich-text-types';
import CollapseEmbed from '../components/blog_embeds/collapse-embed'

class Donate extends React.Component {

	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
		const headerTitle = 'Making donations'
		const headerSubtitle = ''
		
		const donatePageData = get(this, 'props.data.allContentfulPage.nodes[0].richTextBody')
		const donatePageJSON = donatePageData ? JSON.parse(donatePageData.raw) : undefined;

		const assets = new Map(donatePageData.references.map(ref => [ref.contentful_id,ref]))
		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ENTRY]: node => {
					const data = assets.get(node.data.target.sys.id)
					return(
						<CollapseEmbed data={data}/>
					)
                }, 
			}
		}

		return (
			<Layout location={this.props.location}>
				<SEO title='Make a donation'
					description='Read more about how to make donations to Blankets for T.O.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className={"richText"} style={{display: "block"}}>
							{donatePageJSON ? documentToReactComponents(donatePageJSON, options) : <p>Error: Page data not found. Please let Blankets for T.O. know if this issue persists.</p>}
						</div>
					</div>
					<div id='contact-form'>
						<ContactForm/> 
					</div>
				</div> 
			</Layout>
		)
	}
}

export default Donate

export const donatePageQuery = graphql`
	query DonateQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulHeaderImage(filter: {pageName: {eq: "About"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
        allContentfulPage(filter: {contentful_id: {eq: "aShHil3TM6Miht9DEJei3"}}) {
            nodes {
                richTextBody {
                    raw
					references {
						... on ContentfulCollapseEmbed {
							id
							contentful_id
							heading
							body { 
								raw
							}
						}
					  
					}
                }
            }
        }
		
	}
`
