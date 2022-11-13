import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Animation from '../components/animate/animation'
import HeaderImage from '../components/header-image'
import StyledButton from '../components/styled-button'

class Positions extends React.Component {
	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = ''
        const headerTitle = 'Blankets for T.O. Membership'

		const { membershipInformation, memberFormLink } = get(this, 'props.data.allContentfulOrganizationInformation.nodes[0]')

		return (
			<Layout location={this.props.location}>
				<SEO title='Membership and Volunteering'
					description='Support Blankets for T.O. by becoming a member today! Read up how to become a member and what offers and opportunities are available to our community.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div>
							<Animation fade top>
								<StyledButton link={memberFormLink} buttonText='Sign up for membership' openInNewTab/>
							</Animation>
							<Animation fade animationDelay={500}>
								<div className="richText">
									{membershipInformation !== undefined ? documentToReactComponents(JSON.parse(membershipInformation.raw)) : <p>Error: Articles not found.</p>}
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
			memberFormLink
		}
	}
}
`
