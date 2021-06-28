import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import emailImage from '../components/images/contact/emailTransparent.svg'
import twitterImage from '../components/images/contact/twitterTransparent.svg'
import facebookImage from '../components/images/contact/facebookTransparent.svg'
import instagramImage from '../components/images/contact/instagramTransparent.svg'
import tikTokImage from '../components/images/contact/tiktokTransparent.svg'

import styles from '../page-styles/contact.module.css'

class Contact extends React.Component {
	render() {
		const contactInfo = get(this, 'props.data.allContentfulOrganizationInformation.edges')
		const node = contactInfo[0].node
		const officeHours = get(this, 'props.data.allContentfulOrganizationInformationOfficeHoursTextNode.edges')

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
							<h2>Contact Us</h2>
							<div className={styles.socialMedia}>
								{
									nameEntry.map((x, i) => {
										return (
											x != "null" &&
											<div className={styles.socialMediaEntry}>
												<a href={link[i] != "" ? link[i] : null} target="_blank" rel="noopener noreferrer">
													<img src={icon[i]} alt={platform[i] + ' Icon'} />
													<p>{x + (link[i] != "" ? '  \u2197' : "")} </p>
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
													__html: officeHours[0].node.childMarkdownRemark.html,
												}}
											/>
										</div>
									</div> : null
								}
							</div>

							<div className={styles.contactDirectly}>
								<h3>Send Us a Direct Message</h3>
								<Link to='https://us7.list-manage.com/contact-form?u=c190e10f2b62c767274e1197b&form_id=ff96bfbc82a7a31d98bb442faba2bbca' className='links' target="_blank" rel="noopener noreferrer">
									<button className='btn' type="submit">Fill out our contact form</button>
								</Link>
							</div>
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
    allContentfulOrganizationInformationOfficeHoursTextNode {
        edges {
          node {
            childMarkdownRemark {
              html
            }
          }
        }
      }
  }
`
