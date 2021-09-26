import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from '../components/SEO'
import styles from '../page-styles/positions.module.css'
import Fade from 'react-reveal/Fade'
import StyledButton from '../components/styled-button'

class Positions extends React.Component {
	render() {
		const membershipInfo = get(this, 'props.data.allContentfulOrganizationInformationMembershipInformationRichTextNode.edges')[0].node
		
		const formLink = 'https://forms.gle/xDNYp3KzU1M9K1o87'
		
		return (
			<Layout location={this.props.location}>
				<SEO title='Membership and Volunteering'
					description='Support Blankets for T.O. by becoming a member today! Read up how to become a member and what offers and opportunities are available to our community.'/>
				<div className="white-background">
					<div className="wrapper">
						<div className={styles.membershipInfo}>
							<Fade left duration={400}>
								<h2>Membership and Volunteering</h2>
							</Fade>
							<Fade top>
								<StyledButton link={formLink} buttonText='Sign up for membership' openInNewTab/>
							</Fade>
							<Fade delay={500}>
							<div className="richText">
								{membershipInfo.json !== undefined ? documentToReactComponents(membershipInfo.json) : <p>Error: Articles not found.</p>}
							</div>
							</Fade>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}
		
export default Positions

export const positionPageQuery = graphql`
query PositionQuery {
	allContentfulOrganizationInformationMembershipInformationRichTextNode {
		edges {
			node {
				json
			}
		}
	}
	allContentfulPosition {
		edges {
			node {
				title
				positionDescription {
					childMarkdownRemark {
						html
					}
				}
				requirements
				submission
				deadline(formatString: "MMMM Do, YYYY")
			}
		}
	}
}
`
