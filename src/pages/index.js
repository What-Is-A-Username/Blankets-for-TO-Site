import React, {useState} from 'react'
import Img from 'gatsby-image'
import ContactInfo from './contact-info.json'
import { Link } from 'gatsby'
import StyledButton from '../components/styled-button'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import StatsHighlight from '../components/home/stats-highlight'
import styles from '../page-styles/index.module.css'
import SEO from '../components/SEO'
import ContactBox from '../components/home/contact-box'
import Sponsors from '../components/home/sponsors'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import ScreenContainer from '../components/screen-container'
import OrganizationMap from '../components/home/org-map'
import Actions from '../components/home/actions'

class RootIndex extends React.Component {

	render() {
		const allContentfulOrganizationInformation = get(this, 'props.data.allContentfulOrganizationInformation.nodes')
		const organizationBlurb = allContentfulOrganizationInformation[0];
		const mapLocations = get(this, 'props.data.allContentfulDonationLocation.nodes')
		const instagramLink = ContactInfo.contact.find(entry => entry.platform === 'Instagram').link
		const twitterLink = ContactInfo.contact.find(entry => entry.platform === 'Twitter').link
		const personImage = get(this, 'props.data.file')
		const leaflet = [
			<link rel='stylesheet' href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
				integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
				crossorigin='' key='leafletcss'/>,
		] 
		
		return (
			<Layout location={this.props.location}>
				<SEO title='Home' description='Blankets for T.O. is a non-profit organization at the University of Toronto providing support to those in need and combatting stigma surrounding homelessness.' useMailChimp useCurator childElements={leaflet}/>
				<div className='white-background'>
					<div className={styles.title}>
						<div className={styles.image}>
							<div>
								<Img className={styles.backgroundImage} fluid={organizationBlurb.frontPageImage.fluid} alt='Homepage image for Blankets for T.O.'/>			
							</div>
						</div>
						<div className={styles.infoBox}>
							<Fade left>
								<div className={styles.infoBoxText}>
										<h2>
											Eradicating homelessness through action
										</h2>
									<p>
										Founded in 2019 at the University of Toronto Scarborough, we are a non-profit organization addressing homelessness through advocacy, engagement and action. 
									</p>
								</div>
							</Fade>
						</div>
					</div>

					<div className={styles.descriptionContainer}>
						<svg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
							<polygon points='0,5 100,0 100,95 0,100'/>
							<defs>
								<linearGradient id='red_gradient'>
									<stop offset='0' stop-color='#bb4a3c'/>
									<stop offset='1' stop-color='#cf6352'/>
								</linearGradient>
							</defs>
						</svg>
						<div style={{padding: '15vh 0', position: 'relative'}} className={styles.description}>
							<h2>We address homelessness from multiple angles</h2>
							<Actions/>
						</div>
					</div>

					{/* Donation counter */}
					<ScreenContainer>
						<StatsHighlight donationItemCount={organizationBlurb.donationItemCount}/>
					</ScreenContainer>

					<div className={styles.mapContainer}>
						<svg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
							<polygon points='0,0 100,5 100,100 0,95'/>
							<defs>
								<linearGradient id='turq_gradient'>
									<stop offset='0' stop-color='#3d7f7f'/>
									<stop offset='1' stop-color='#80acaf'/>
								</linearGradient>
							</defs>
						</svg>
						<div style={{padding: '15vh 0', position: 'relative'}}>
							<OrganizationMap mapLocations={mapLocations}/> 
						</div>
					</div>
					{/* Updates */}
					<ScreenContainer>
						<Fade>
							<ArticlePreview/>
						</Fade>
					</ScreenContainer>
						
					<div className={styles.descriptionContainer}>
						<svg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
							<polygon points='0,5 100,0 100,95 0,100'/>
							<defs>
								<linearGradient id='red_gradient'>
									<stop offset='0' stop-color='#bb4a3c'/>
									<stop offset='1' stop-color='#cf6352'/>
								</linearGradient>
							</defs>
						</svg>
						<div style={{padding: '15vh 0', position: 'relative'}} className={styles.description}>
							<h2>Get involved with us today</h2>
							<ContactBox/>
						</div>
					</div>

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
								<div id='curator-feed-default-feed-layout'>
									<a href='https://curator.io' target='_blank' className='crt-logo crt-tag'>
										Powered by Curator.io
									</a>
								</div>
							</div>
						</Fade>
						<Fade delay={300}>
							<div className={styles.btnRow}>	
								<StyledButton link={instagramLink} buttonText='Visit us on Instagram' openInNewTab/>
								<StyledButton link={twitterLink} buttonText='Visit us on Twitter' openInNewTab/>
							</div>
						</Fade>
					</div>
				</div>
			</Layout>
			)
		}
	}
	
	export default RootIndex
	
	export const pageQuery = graphql`
	query HomeQuery {
		site 
		{
			siteMetadata 
			{
				title
			}
		}
		
		allContentfulDonationLocation 
		{
			nodes 
			{
				city
				coordinateLatitude
				coordinateLongitude
				name
				provinceState
				street
				description 
				{
					description
				}
			}
		}
		allContentfulOrganizationInformation 
		{
			nodes 
			{
				childContentfulOrganizationInformationOrganizationFrontBlurbTextNode 
				{
					organizationFrontBlurb
				}

				donationItemCount : donationItemCounter
				
				frontPageImage 
				{
					fluid(
						maxHeight: 1920
						resizingBehavior: PAD
						background: "rgb:000000"
						) {
							...GatsbyContentfulFluid_tracedSVG
						}
					
				}

				leftBackgroundImage 
				{
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
`
