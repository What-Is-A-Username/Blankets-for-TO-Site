import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../page-styles/positions.module.css'
import Fade from 'react-reveal/Fade'
import Award from '../components/awards/award'

export default class Awards extends React.Component {

    state = { reveal: false}

	render() {
        const intro = 'As Blankets for T.O. extends its commitment to the community by supporting vulnerable groups, we are grateful to be honoured with awards, letters of recognition and tokens of appreciation from local groups and community leaders.'
		const awardData = get(this, 'props.data.allContentfulAward.nodes')
		
		return (
			<Layout location={this.props.location}>
				<SEO title='Awards'
				    description='Browse the collection of awards and letters of appreciation that Blankets for T.O. has for our involvement in the community.'/>
				<div className="white-background">
					<div className="wrapper">
						<div className={styles.membershipInfo}>
							<Fade left duration={400}>
								<h2>Awards and Recognition</h2>
							</Fade>
                            <Fade delay={500}>
							    <p style={{paddingBottom: '30px'}}>{intro}</p>
						    </Fade>
							{
                                awardData.map((award) => {
                                    return(
                                    <Fade delay={this.state.reveal ? 200 : 500} duration={300}>
                                       <Award awardData={award}></Award>
                                    </Fade>)
                                })
                            }
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}
		
export const awardPageQuery = graphql`
query AwardQuery {
    allContentfulAward(sort: {fields: date, order: DESC}) {
        nodes {
            awardName
            date(formatString: "MMMM YYYY")
            description {
            description
        } 
        image {
            fluid(maxWidth: 400, resizingBehavior: SCALE, quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
            }
        }
      }
    }
  }
  
`
