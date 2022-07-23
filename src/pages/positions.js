import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from '../components/SEO'
import * as styles from '../page-styles/positions.module.css'
import StyledButton from '../components/styled-button'
import HeaderImage from '../components/header-image'
import Animation from '../components/animate/animation'

class Positions extends React.Component {
	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = ''
        const headerTitle = 'Blankets for T.O. Membership'

		const membershipInfo = get(this, 'props.data.allContentfulOrganizationInformation.nodes[0].membershipInformation')

		const formLink = 'https://forms.gle/xDNYp3KzU1M9K1o87'

		return (
			<Layout location={this.props.location}>
				<SEO title='Membership and Volunteering'
					description='Support Blankets for T.O. by becoming a member today! Read up how to become a member and what offers and opportunities are available to our community.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className={styles.membershipInfo}>
							<Animation fade top>
								<StyledButton link={formLink} buttonText='Sign up for membership' openInNewTab/>
							</Animation>
							<Animation fade animationDelay={500}>
								<div className="richText">
									{membershipInfo !== undefined ? documentToReactComponents(JSON.parse(membershipInfo.raw)) : <p>Error: Articles not found.</p>}
								</div>
							</Animation>
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
	allContentfulHeaderImage(filter: {pageName: {eq: "Positions"}}, limit: 1) {
		nodes {
			image {
				gatsbyImageData(
					layout: FULL_WIDTH
					placeholder: BLURRED
				)
			}
		}
	}
	allContentfulOrganizationInformation(limit: 1) {
		nodes {
		  	membershipInformation {
				raw
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
