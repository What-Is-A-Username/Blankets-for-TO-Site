import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import Animation from '../components/animate/animation'
import Award from '../components/awards/award'
import HeaderImage from '../components/header-image'

export default class Awards extends React.Component {

	render() {
        const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = ''
        const headerTitle = 'Awards and Recognition'
        
        const intro = 'As Blankets for T.O. extends its commitment to the community by supporting vulnerable groups, we are grateful to be honoured with awards, letters of recognition and tokens of appreciation from local groups and community leaders.'
		const awardData = get(this, 'props.data.allContentfulAward.nodes')
		
		return (
			<Layout location={this.props.location}>
				<SEO title='Awards'
				    description='Browse the collection of awards and letters of appreciation that Blankets for T.O. has for our involvement in the community.'/>
				<div className="white-background">
                    <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div>
                            <Animation fade animationDelay={500}>
							    <div className='richText'>
                                    <p style={{paddingBottom: '30px'}}>{intro}</p>
                                </div>
                            </Animation>
							{
                                awardData.map((award) => {
                                    return(
                                       <Animation fade animationDelay={300} key={award.awardName}>
                                           <Award awardData={award}/>
                                       </Animation>
                                       )
                                })
                            }
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}
		
export const awardPageQuery = graphql`query AwardQuery {
  allContentfulHeaderImage(filter: {pageName: {eq: "Awards"}}, limit: 1) {
    nodes {
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
  allContentfulAward(sort: {date: DESC}) {
    nodes {
      awardName
      date(formatString: "MMMM YYYY")
      description {
        description
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
}`
