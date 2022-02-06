import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Member from '../components/team/member-circle'
import SEO from '../components/SEO'
import styles from '../page-styles/team.module.css'
import Fade from 'react-reveal/Fade'
import 'animate.css';
import HeaderImage from '../components/header-image'

class Team extends React.Component {

	state = {reveal: false}

	render() {
		const members = get(this, 'props.data.allContentfulExecutive.edges')

		const imgFluid = get(this, 'props.data.allContentfulAsset.edges[0].node.fluid')
        const headerSubtitle = ''
        const headerTitle = 'Team'

		return (
			<Layout location={this.props.location}>
				<SEO title='Executive Team'
					description='Meet the talented and motivated members of the team at Blankets for T.O. that makes all of our events possible.'/>
				<div className="sidebarabove"></div>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className={styles.executiveList}>
							{members.map(({ node }) => {
								return (node.name !== "John Doe" ? 
								<Fade left delay={this.state.reveal ? 100 : 700} duration={350} key={node.name}>
									<Member data={node} /> 
								</Fade>
								: null)
							})}
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default Team

export const teamPositionQuery = graphql`
    query TeamQuery {
      	site {
			siteMetadata {
				title
			}
    	}
		allContentfulExecutive(sort : {fields: [isFounder, name], order: DESC}) {
			edges {
				node {
					name
					isFounder
					title
					email
					facebookLink
					instagramLink
					twitterLink
					linkedInLink
					websiteLink
					githubLink
					photo
					{
						fluid(maxWidth: 300, maxHeight: 300, resizingBehavior: SCALE)
						{
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
		allContentfulAsset(filter: {title: {eq: "Handdrawn background "}}, limit: 1) {
			edges {
				node {
					fluid(
						resizingBehavior: FILL
						quality: 100
					) {
						...GatsbyContentfulFluid_tracedSVG
					}
				}
			}
		}
  	}
`
