import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Member from '../components/team/member-circle'
import SEO from '../components/SEO'
import styles from '../page-styles/team.module.css'
import Fade from 'react-reveal/Fade'
import 'animate.css';

class Team extends React.Component {

	state = {reveal: false}

	render() {
		const members = get(this, 'props.data.allContentfulExecutive.edges')

		return (
			<Layout location={this.props.location}>
				<SEO title='Executive Team'
					description='Meet the talented and motivated members of the team at Blankets for T.O. that makes all of our events possible.'/>
				<div className="sidebarabove"></div>
				<div className="white-background">
					<div className="wrapper">
						<Fade left duration={400}>
							<h2>Executive Team</h2>
						</Fade>
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
  	}
`
// shortBio {
// 	childMarkdownRemark {
// 		html
// 	}
// }
// photo {
// 	fluid(
// 		maxWidth: 540
// 		maxHeight: 540
// 		resizingBehavior: PAD
// 		background: "rgb:000000"
// 	) {
// 		...GatsbyContentfulFluid_tracedSVG
// 	}
// }