import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import styles from './footer.module.css'
import emailImage from './images/contact/emailTransparent.svg'
import twitterImage from './images/contact/twitterTransparent.svg'
import facebookImage from './images/contact/facebookTransparent.svg'
import instagramImage from './images/contact/instagramTransparent.svg'
import tikTokImage from './images/contact/tiktokTransparent.svg'
import pageData from '../pages/page-data.json'
import FooterItem from './navigation/footer-item'
import Fade from 'react-reveal/Fade'

const Footer = (props) => {
	var contactInfo = props.allContentfulOrganizationInformation.edges
	const node = contactInfo[0].node
	const pages = pageData.pages

	const platform = ["Email", "Facebook", "Instagram", "Twitter", "TikTok"]
	const nameEntry = [node.emailAddress, node.facebook, node.instagram, node.twitter, node.tikTok]
	const link = ['mailto:' + node.emailAddress, node.facebookLink, node.instagramLink, node.twitterLink, node.tiktokLink]
	const icon = [emailImage, facebookImage, instagramImage, twitterImage, tikTokImage]

	return (
		<Fade>
		<footer role="contentinfo" className={styles.footer}>
			<h1 className={styles.footerTitle}>
				Blankets For T.O.
      		</h1>
			<div className={styles.socialMedia}>
				{
					nameEntry.map((x, i) => {
						return (
							x != "null" &&
							<div className={styles.socialMediaEntry} key={platform[i]}>
								<a href={link[i] != "" ? link[i] : '/contact'}
									target={link[i] != "" ? '_blank' : ''}
									rel='noopener noreferrer'>
									<img src={icon[i]} alt={platform[i] + " Icon"} />
								</a>
							</div>
						)
					})
				}
			</div>
			<p className={styles.footerInfo}>
				An organization at the University of Toronto Scarborough.
      		</p>
			<ul className={styles.navigation}>
			{
				pages.map((page) => { return (<FooterItem page={page}/>)})
			}
			</ul>
			<div className={styles.credits}>
				<Link to={'/credits'}> Media Credits and Attribution</Link>
			</div>
			<div className={styles.credits}/>
		</footer>
		</Fade>
	)
}

export default () => {
	return (
		<StaticQuery
			query={graphql`
				query FooterQuery {
					allContentfulOrganizationInformation {
						edges {
							node {
								emailAddress
								facebook
								facebookLink
								instagram
								instagramLink
								officeAddress
								phoneNumber
								tikTok
								tiktokLink
								twitter
								twitterLink
							}
						}
					}
				}
			`}
			render={data => Footer(data)}
		/>
	)
}

