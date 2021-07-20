import React, {useState} from 'react'
import Img from 'gatsby-image'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import StatsHighlight from '../components/home/stats-highlight'
import styles from '../page-styles/index.module.css'
import Slideshow from '../components/home/slideshow'
import SEO from '../components/SEO'
import ContactBox from '../components/home/contact-box'
import Sponsors from '../components/home/sponsors'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { set } from 'lodash'

// import $ from "jquery"

class RootIndex extends React.Component {

	// Previous functionality to play video on site
	// componentDidMount() {
	// 	$(function () {
	// 		var mainVideo = document.getElementById("titleVideo");
	// 		var source = document.createElement("source"); 
	// 		if ($(window).width() < 760) 
	// 			source.src = "BTO Timelapse Mobile Version 400x800.mp4"; 
	// 		else 
	// 			source.src = "BTO TIMELAPSE.mp4"; 
	// 		mainVideo.append(source); 
	// 	})
	// }

	render() {
		const posts = get(this, 'props.data.allContentfulBlogPost.edges')
		const organizationBlurb = get(this, 'props.data.allContentfulOrganizationInformation.edges')
		const slides = get(this, 'props.data.allContentfulHomeSlide.edges')
		
		const setVidSpeed = () => { 
			var vid = document.getElementById("titleVideo");
			vid.playbackRate = 1.0;
		} 

		const googleSearchConsoleID = [<meta name="google-site-verification" content="H85FiZN3YyU6tHavccegyjHzxSSC6kc_7d22i6IDx2Y" />] 
		
		return (
			<Layout location={this.props.location}>
				<SEO title="Home" useMailChimp useCurator/>

				<div className="white-background">
					{/* Background Image or Video */}
					<Fade>
						<div className={styles.title}>
							<Img className={styles.backgroundImage} fluid={organizationBlurb[0].node.frontPageImage.fluid} alt='Background image behind Blankets for T.O. organization logo.'>			
							</Img>
							{/* <video onPlay={setVidSpeed} muted autoPlay className={styles.backgroundVideo} id='titleVideo'/> */}
						</div>
					</Fade>
					{/* Description */}
					<Bounce left>
						<div className={styles.description}>
							<h2>Our Organization</h2>
							<p>{organizationBlurb[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb}</p>
							<div className={styles.btnRow}>
								<Link to="/about" className='links'>
									<button className='whiteBtn' type="submit">Read more</button>
								</Link>
								<Link to="/team" className='links'>
									<button className='whiteBtn' type="submit">Meet the team</button>
								</Link>
							</div>
						</div>
					</Bounce>
					<StatsHighlight donationItemCount={organizationBlurb[0].node.donationItemCount}/>
					{/* Slideshow */}
					<Bounce left>
						<Slideshow menuItems={slides}></Slideshow>
					</Bounce>
					{/* Updates */}
					<Fade>
						<ArticlePreview articles={posts}/>
					</Fade>
						
					{/* Join Us and Contact Us Box */}
					<Bounce right>
						<ContactBox left={organizationBlurb[0].node.leftBackgroundImage.fluid} right={organizationBlurb[0].node.leftBackgroundImage.fluid}></ContactBox>
						{/* Sponsor and Partner Logos */}
					</Bounce>

					<Bounce left>
						<Sponsors/>
					</Bounce>

					{/* Instagram Feed */}
					<div className={styles.instagram}>
						<Bounce top>
							<h2 className={styles.instagramTitle}>Keep updated with our feed</h2>
						</Bounce>
						<Fade delay={250}>
						<div className={styles.instagramPosts}>
							<div id="curator-feed-default-feed-layout">
								<a href="https://curator.io" target="_blank" class="crt-logo crt-tag" className="crt-logo crt-tag">
									Powered by Curator.io
								</a>
							</div>
						</div>
						</Fade>
						<Bounce left delay={300}>
							<Link to="https://www.instagram.com/blanketsforto" className={'links' + ' ' + styles.instagramLink}>
								<button className='btn' type="submit">Visit us on Instagram</button>
							</Link>
						</Bounce>
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

					donationItemCount : donationItemCounter
					
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
						// }`
