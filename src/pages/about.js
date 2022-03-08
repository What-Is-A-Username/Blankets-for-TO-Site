import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../page-styles/about.module.css'
import { BLOCKS } from '@contentful/rich-text-types';
import Fade from 'react-reveal/Fade'
import HeaderImage from '../components/header-image'

class About extends React.Component {

	state = { showRecentAnnualReport: false }

	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.fluid')
		const headerTitle = 'About Us'
		const headerSubtitle = ''
		
		const aboutPage = get(this, 'props.data.allContentfulOrganizationInformationAboutPageRichTextNode.edges')
		const node = aboutPage[0].node;

		const onToggle = () => 
		{
			this.setState({showRecentAnnualReport: !this.state.showRecentAnnualReport})
		}

		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
				{
					if (fields.file['en-US'].contentType === 'application/pdf')
					{
						return(
							<div className={styles.pdfFrame}>
								<a onClick={onToggle}>{"Click here to " + (this.state.showRecentAnnualReport ? "hide" : "show") + ` the ${fields.title['en-US']}`}</a>
								{this.state.showRecentAnnualReport && <iframe src={fields.file['en-US'].url}></iframe>}
							</div>
						)
					}
				}
			},
		};

		return (
			<Layout location={this.props.location}>
				<SEO title='About'
					description='Read more about Blankets for T.O. like its goals in helping and advocating for the homeless through events, donations, and awareness initiatives.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<Fade delay={500}>
						<div className={"richText " + styles.description} >
							{node.json !== undefined ? documentToReactComponents(node.json, options) : <p>Error: Articles not found.</p>}
						</div>
						</Fade>
					</div>
				</div> 
			</Layout>
		)
	}
}

export default About

export const aboutPageQuery = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulOrganizationInformationAboutPageRichTextNode {
			edges {
				node {
					json
				}
			}
		}
		allContentfulHeaderImage(filter: {pageName: {eq: "About"}}, limit: 1) {
			nodes {
				image {
					fluid(
						resizingBehavior: FILL,
						quality: 100,
						maxWidth: 4000
					) {
						...GatsbyContentfulFluid_tracedSVG
					}
				}
			}
		}
		recentAnnualReport : allContentfulAsset(filter: {file: {contentType: {eq: "application/pdf"}}, title: {eq: "2021 Blankets for T.O. Annual Report"}}) {
			nodes {
				file {
					url
				}
				title
			}
		}
	}
`
