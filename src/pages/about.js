import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { ExternalLink } from 'react-feather'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

import Animation from '../components/animate/animation'
import HeaderImage from '../components/header-image'

import * as styles from '../page-styles/about.module.css'
class About extends React.Component {

	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
		const headerTitle = 'About Us'
		const headerSubtitle = ''
		
		const aboutPage = get(this, 'props.data.allContentfulOrganizationInformation.nodes[0].aboutPage')

		const assets = new Map(aboutPage.references.map(ref => [ref.contentful_id,ref]))
		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: node => {
					const data = assets.get(node.data.target.sys.id)
					return(
						<div>
							<a className={styles.pdfLink} href={data.file.url} target="_blank" rel='noopener noreferrer'>{`${data.title}`} (.pdf) <ExternalLink size='14'/></a>
						</div>
					)
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
						<Animation fade animationDelay={500}>
							<div className={"richText " + styles.description} >
								{aboutPage !== undefined ? documentToReactComponents(JSON.parse(aboutPage.raw), options) : <p>Error: Articles not found.</p>}
							</div>
						</Animation>
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
		allContentfulOrganizationInformation(limit: 1) {
			nodes {
				aboutPage {
				  	raw
					  references{
						contentful_id
						title
						file {
							url
							fileName
							contentType
						  }
					}
				}
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
