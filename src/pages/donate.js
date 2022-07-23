import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as styles from '../page-styles/about.module.css'
import HeaderImage from '../components/header-image'

class Donate extends React.Component {

	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
		const headerTitle = 'Donate to Blankets for T.O.'
		const headerSubtitle = ''
		
		const donatePageData = get(this, 'props.data.allContentfulPage.nodes[0].richTextBody')
        const options = {}

		return (
			<Layout location={this.props.location}>
				<SEO title='Donate to Blankets for T.O.'
					description='Read more about how to make donations to Blankets for T.O.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className={"richText " + styles.description} >
							{donatePageData !== undefined ? documentToReactComponents(JSON.parse(donatePageData.raw), options) : <p>Error: Page data not found. Please let Blankets for T.O. know if this issue persists.</p>}
						</div>
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
		allContentfulHeaderImage(filter: {pageName: {eq: "Team"}}, limit: 1) {
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
                }
            }
        }
		
	}
`
