import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'

import emailImage from '../components/images/contact/emailTransparent.svg'
import twitterImage from '../components/images/contact/twitterTransparent.svg'
import facebookImage from '../components/images/contact/facebookTransparent.svg'
import instagramImage from '../components/images/contact/instagramTransparent.svg'
import tikTokImage from '../components/images/contact/tiktokTransparent.svg'

import styles from '../page-styles/contact.module.css'
import StyledButton from '../components/styled-button'

import { ExternalLink } from 'react-feather'

class Contact extends React.Component {
	render() {
		const contactInfo = get(this, 'props.data.allContentfulOrganizationInformation.nodes')
		const node = contactInfo[0];
		const officeHours = get(this, 'props.data.allContentfulOrganizationInformationOfficeHoursTextNode.nodes')

		const platform = ["Email", "Facebook", "Instagram", "Twitter", "TikTok"]
		const nameEntry = [node.emailAddress, node.facebook, node.instagram, node.twitter, node.tikTok]
		const link = ['mailto:' + node.emailAddress, node.facebookLink, node.instagramLink, node.twitterLink, node.tiktokLink]
		const icon = [emailImage, facebookImage, instagramImage, twitterImage, tikTokImage]

		return (
			<Layout location={this.props.location}>
				<SEO title="Contact Us"
					description="Want to reach out to Blankets for T.O. to join, collaborate, or ask a question? Connect to us through any of contact details or social media links shown here."/>
				<div className="white-background">
						<div className="wrapper">
							<Fade left duration={400}>
								<h2>Contact Us</h2>
							</Fade>
							<Fade delay={400}>
							<div className={styles.socialMedia}>
								{
									nameEntry.map((x, i) => {
										return (
											x != "null" &&
											<div className={styles.socialMediaEntry}>
												<a href={link[i] != "" ? link[i] : null} target="_blank" rel="noopener noreferrer">
													<img src={icon[i]} alt={platform[i] + ' Icon'} />
													<p className={styles.socialMediaLink}>{x} {link[i] != "" && <ExternalLink/>}</p>
												</a>
											</div>
										)
									}
									)
								}
							</div>
							
							<div className={styles.contactDetails}>
								{node.officeAddress != "null" ?
									<div>
										<h4>{`Office`}</h4>
										<a>{node.officeAddress}</a>
										<div className={styles.officeHours}>
											<div
												dangerouslySetInnerHTML={{
													__html: officeHours[0].childMarkdownRemark.html,
												}}
											/>
										</div>
									</div> : null
								}
							</div>
							<div className={styles.contactDirectly}>
								<h3>Send Us a Direct Message</h3>
								<StyledButton link='https://us7.list-manage.com/contact-form?u=c190e10f2b62c767274e1197b&form_id=ff96bfbc82a7a31d98bb442faba2bbca' buttonText='Fill out our contact form' openInNewTab/>
							</div>
							</Fade>
						</div>
				</div>
			</Layout>
		)
	}
}

export default Contact

export const ContactQuery = graphql`
query ContactQuery {
    allContentfulOrganizationInformation {
        nodes {
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
    allContentfulOrganizationInformationOfficeHoursTextNode {
		nodes {
			childMarkdownRemark {
				html
			}
		}
      }
  }
`
