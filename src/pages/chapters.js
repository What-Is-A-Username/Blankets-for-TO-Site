import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import HeaderImage from '../components/header-image'
import SquareGrid from '../components/layouts/square-grid'

class About extends React.Component {

	state = { showRecentAnnualReport: true }

	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
		const headerTitle = 'Chapters'
		const headerSubtitle = ''
		
		const chapterData = get(this, 'props.data.allContentfulBtoChapter.nodes')
		const content = chapterData.map(chapter => {
            return(
                {
                    title: chapter.chapterName,
                    gatsbyImageData: chapter.chapterLogo.gatsbyImageData,
                    description: chapter.location,
                    link: "/chapter/" + chapter.slug,
                }
            )
        })

		return (
			<Layout location={this.props.location}>
				<SEO title='Chapter locations of Blankets for T.O.'
					description='Find your local Blankets for T.O. chapter to support their initiatives and join their community.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
                        <div className='richText'>
                        <h2>Blankets for T.O. has a province-wide reach</h2>
                        <p>
                            Homelessness is not isolated to any single community, city, region or country. After establishing our founding chapter at the University of Toronto Scarborough, we have extended our reach across Ontario by establishing multiple chapters across the province so that help is never too far away.
                        </p>
						<h4>
							Find your local Blankets for T.O. chapter
						</h4>
                        <p>
							Find your local chapter below to connect with its community and leadership. Support their initiatives, attend their events, and follow their content as together we work to face homelessness issues at the provincial, national and global scale.
							</p>
						<h4>
							Unable to find a Blankets for T.O. chapter near you?
						</h4>
						<p>
							<p>
								<a href='/contact' style={{marginRight: '5px'}}>
								Contact us if you want to help set up a Blankets for T.O. chapter in your local community. 
								</a>
								Blankets for T.O. will provide you with the skills and resources necessary to make your chapter a success.
							</p>
						</p>
                        </div>
						<SquareGrid content={content}/>
					</div>
				</div> 
			</Layout>
		)
	}
}

export default About

export const chaptersQuery = graphql`
	query ChapterQuery {
		allContentfulBtoChapter {
            nodes {
                slug
                chapterName
                location
                chapterLogo {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
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
	}
`
