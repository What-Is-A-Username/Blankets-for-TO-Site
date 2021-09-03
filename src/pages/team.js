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
				<SEO title="Team"
					description="Meet the talented and motivated members of the team at Blankets for T.O. that makes all of our events possible." />
				<div className="sidebarabove"></div>
				<div className="white-background">
					<div className="wrapper">
						<Fade left duration={400}>
							<h2>Executive Team</h2>
						</Fade>
						{/* <Fade delay={500} onReveal={() => this.setState({reveal: true})}>
							<p>Due to current COVID-19 restrictions, we are unable at this time to organize photos for all of our members. However, we expect that you will be able to meet our team in the near future. Thank you for your patience.</p>
						</Fade> */}
						<div className={styles.executiveList}>
							{members.map(({ node }) => {
								return (node.name !== "John Doe" ? 
								<Fade left delay={this.state.reveal ? 200 : 700} duration={400}>
									<Member key={node.name} data={node} /> 
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
					facebook
					facebookLink
					insta
					instagramLink
					twitter
					twitterLink
					linkedIn
					linkedInLink
					photo
					{
						fluid(resizingBehavior: SCALE)
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