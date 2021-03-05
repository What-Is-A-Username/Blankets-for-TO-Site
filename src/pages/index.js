import React from 'react'
import Img from 'gatsby-image'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styles from '../page-styles/index.module.css'
import Slideshow from '../components/slideshow'
import SEO from '../components/SEO'
import ContactBox from '../components/contact-box'
import Sponsors from '../components/sponsors'

class RootIndex extends React.Component {
	render() {
		const posts = get(this, 'props.data.allContentfulBlogPost.edges')
		const organizationBlurb = get(this, 'props.data.allContentfulOrganizationInformation.edges')
		const slides = get(this, 'props.data.allContentfulHomeSlide.edges')
		
		const setVidSpeed = () => { 
			var vid = document.getElementById("titleVideo");
			vid.playbackRate = 2.0;
		} 
		
		const googleSearchConsoleID = [<meta name="google-site-verification" content="H85FiZN3YyU6tHavccegyjHzxSSC6kc_7d22i6IDx2Y" />] 
		
		return (
			<Layout location={this.props.location}>
				<SEO title="Home" useMailChimp={true} childElements={googleSearchConsoleID} useCurator={true}>
				</SEO>
				<div className="white-background">
					<div className={styles.title}>
                        <Img className={styles.backgroundImage} fluid={organizationBlurb[0].node.frontPageImage.fluid} alt='Background image behind Blankets for T.O. organization logo.'>			
						</Img>
					</div>
					{/* Description, centered  */}
					<div className={styles.description}>
						<h2>Our Organization</h2>
						<p>{organizationBlurb[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb}</p>
						<div className={styles.btnRow}>
							<Link to="/about" className='links'>
								<button className='whiteBtn' type="submit">Read Our Mission</button>
							</Link>
							<Link to="/team" className='links'>
								<button className='whiteBtn' type="submit">Meet The Team</button>
							</Link>
						</div>
					</div>
					{/* Slideshow */}
					<Slideshow menuItems={slides}></Slideshow>
					{/* Updates */}
					<div className={styles.updates}>
						<h2>News and Updates</h2>
						<ArticlePreview articles={posts}/>
						<Link to="/blog" className='links'>
							<button className='btn' type="submit">Browse all updates</button>
						</Link>
					</div>
					{/* Join Us and Contact Us Box */}
					<ContactBox left={organizationBlurb[0].node.leftBackgroundImage.fluid} right={organizationBlurb[0].node.leftBackgroundImage.fluid}></ContactBox>
					
					{/* Sponsor and Partner Logos */}
					<Sponsors/>

					<div className={styles.instagram}>
						<h2>Keep updated with our feed</h2>
						<div id="curator-feed-default-feed-layout">
							<a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
								Powered by Curator.io
							</a>
						</div>
						<Link to="https://www.instagram.com/blanketsforto" className='links'>
								<button className='btn' type="submit">Visit us on Instagram</button>
							</Link>
					</div>
				
				</div>
			</Layout>
			)
		}
	}
	
	export default RootIndex
	
	export const pageQuery = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulHomeSlide { 
			edges {
				node {
					title
					childContentfulHomeSlideDescriptionRichTextNode {
						json
					}
					buttonText
					buttonLink
					backgroundImage {
						fluid(
							maxWidth: 1000
							resizingBehavior: FILL
							background: "rgb:000000"
							) {
								...GatsbyContentfulFluid_tracedSVG
							}
						}
					}
				}
			}
			allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3, filter: {articleType: {ne: "Page"}}) {
				edges {
					node {
						title
						slug
						publishDate(formatString: "MMMM Do, YYYY")
						description {
							childMarkdownRemark {
								html
							}
						}
					}
				}
			}
			allContentfulOrganizationInformation {
				edges {
					node {
						childContentfulOrganizationInformationOrganizationFrontBlurbTextNode {
							organizationFrontBlurb
						}
						
						frontPageImage {
							fluid(
								maxHeight: 1920
								resizingBehavior: PAD
								background: "rgb:000000"
								) {
									...GatsbyContentfulFluid_tracedSVG
								}
							
						}

						leftBackgroundImage {
							fluid(
								maxHeight: 1000
								resizingBehavior: PAD
								background: "rgb:000000"
								) {
									...GatsbyContentfulFluid_tracedSVG
								}
							}
						}
					}
				}
			}
`

const unused = 
`
// homePageVideo {
						// 	file {
						// 		url
						// 	}
						// }

frontPageImage {
	fluid(maxWidth: 1900, maxHeight: 1080
		resizingBehavior: FILL
		background: "rgb:000000"
		) {
			...GatsbyContentfulFluid_tracedSVG
		}
	}`
