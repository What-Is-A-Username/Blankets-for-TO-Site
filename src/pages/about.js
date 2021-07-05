import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../page-styles/about.module.css'
import Container from '../components/container'
import { BLOCKS } from '@contentful/rich-text-types';
import Fade from 'react-reveal/Fade'

class About extends React.Component {
	render() {
		const aboutPage = get(this, 'props.data.allContentfulOrganizationInformationAboutPageRichTextNode.edges')
		const node = aboutPage[0].node;

		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
					<img src={fields.file['en-US'].url}
						style={{
							maxHeight: 300,
							width: fields.file['en-US'].details.image.width * (300 / fields.file['en-US'].details.image.height),
						}}
						alt={fields.description}
					/>,
			},
		};

		return (
			<Layout location={this.props.location}>
				<SEO title="About"
					description="Read more about Blankets for T.O., including its primary objective of helping and advocating for the homeless through charitable events, donations, and awareness initiatives."/>
				<div className="white-background">
					<div className="wrapper">
						<Fade left duration={400}>
							<h2>Our Organization</h2>
						</Fade>
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
	}
`
