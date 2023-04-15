import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import SEO from '../components/SEO'
import { GatsbyImage } from 'gatsby-plugin-image'

import Animation from '../components/animate/animation'
import Actions from '../components/home/actions'
import ArticlePreview from '../components/article-preview'
import ContactBox from '../components/home/contact-box'
import ContactForm from '../components/home/contact-form'
import ContactInfo from './contact-info.json'
import OrganizationMap from '../components/home/org-map'
import ScreenContainer from '../components/screen-container'
import Sponsors from '../components/home/sponsors'
import StatsHighlight from '../components/home/stats-highlight'
import StyledButton from '../components/styled-button'
import * as styles from '../page-styles/index.module.css'

class RootIndex extends React.Component {

	render() {
		const allContentfulOrganizationInformation = get(this, 'props.data.allContentfulOrganizationInformation.nodes')
		const organizationBlurb = allContentfulOrganizationInformation[0];
		const mapLocations = get(this, 'props.data.allContentfulDonationLocation.nodes')
		const instagramLink = ContactInfo.contact.find(entry => entry.platform === 'Instagram').link
		const twitterLink = ContactInfo.contact.find(entry => entry.platform === 'Twitter').link
		const leaflet = [
			<link rel='stylesheet' href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
				integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
				crossorigin='' key='leafletcss' />,
		]

		return (
			<Layout location={this.props.location}>
				<SEO title='Home' description='Blankets for T.O. is a non-profit organization at the University of Toronto providing support to those in need and combatting stigma surrounding homelessness.' useMailChimp useCurator childElements={leaflet} />
				<div className='white-background'>
					<div className={styles.title}>
						<div className={styles.image}>
							<GatsbyImage className={styles.backgroundImage} image={organizationBlurb.frontPageImage.gatsbyImageData} alt='Homepage image for Blankets for T.O.' />
						</div>
						<div className={styles.infoBox}>
							<Animation fade left>
								<div className={styles.infoBoxText}>
									<h2>Eradicating homelessness through action</h2>
									<p>Founded in 2019 at the University of Toronto Scarborough, we are an organization addressing homelessness through advocacy, engagement and action across Ontario. </p>
								</div>
							</Animation>
						</div>
					</div>

					<div className={styles.descriptionContainer}>
						<svg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
							<polygon points='0,0 100,0 100,95 0,100' />
							<defs>
								<linearGradient id='red_gradient'>
									<stop offset='0' stopColor='#bb4a3c' />
									<stop offset='1' stopColor='#cf6352' />
								</linearGradient>
							</defs>
						</svg>
						<div className={styles.description}>
							<h2 className={styles.multipleMethodTitle}>We address homelessness from multiple angles</h2>
							<Actions />
						</div>
					</div>

					<ScreenContainer id='donation-counter'>
						<div className={styles.donationColumn} >
							<StatsHighlight donationItemCount={organizationBlurb.donationItemCount} />
							<div className={styles.btnRow}>
								<StyledButton link='/donate' buttonText='Make a donation today' />
							</div>
						</div>
					</ScreenContainer>

					<div className={styles.mapContainer} id='donation-map'>
						<svg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
							<polygon points='0,0 100,5 100,100 0,95' />
							<defs>
								<linearGradient id='turq_gradient'>
									<stop offset='0' stopColor='#3d7f7f' />
									<stop offset='1' stopColor='#80acaf' />
								</linearGradient>
							</defs>
						</svg>
						<div className={styles.mapArea}>
							<OrganizationMap mapLocations={mapLocations} />
						</div>
					</div>

					{/* Updates */}
					<ScreenContainer id='articles'>
						<ArticlePreview />
					</ScreenContainer>

					<div className={styles.descriptionContainer} id='join-contact'>
						<svg width='100%' height='100%' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
							<polygon points='0,5 100,0 100,95 0,100' />
							<defs>
								<linearGradient id='red_gradient'>
									<stop offset='0' stopColor='#bb4a3c' />
									<stop offset='1' stopColor='#cf6352' />
								</linearGradient>
							</defs>
						</svg>
						<div className={styles.description + ' ' + styles.joinContactArea}>
							<h2>Get involved with us today</h2>
							<ContactBox />
						</div>
					</div>

					<Sponsors />

					{/* Instagram Feed */}
					<div className={styles.instagram} id='social-feed'>
						<Animation bounce top>
							<h2 className={styles.instagramTitle}>Keep updated with our feed</h2>
							<div className={styles.instagramPosts}>
								<div id='curator-feed-default-feed-layout'>
									<a href='https://curator.io' target='_blank' className='crt-logo crt-tag'>
										Powered by Curator.io
									</a>
								</div>
							</div>
							<div className={styles.btnRow}>
								<StyledButton link={instagramLink} buttonText='Visit us on Instagram' openInNewTab />
								<StyledButton link={twitterLink} buttonText='Visit us on Twitter' openInNewTab />
							</div>
						</Animation>
					</div>

					<div id='contact-form'>
						<ContactForm />
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
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)			
				}
			}
		}
	}
`
