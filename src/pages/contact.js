import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'

import contactData from '../pages/contact-info.json'

import styles from '../page-styles/contact.module.css'
import StyledButton from '../components/styled-button'

import { ExternalLink } from 'react-feather'

class Contact extends React.Component {
	render() {
		const contactInfo = contactData.contact

		return (
			<Layout location={this.props.location}>
				<SEO title='Contact Us'
					description='Want to reach out to Blankets for T.O. to join, collaborate, or ask a question? Connect to us through our contact details or social media links here.'/>
				<div className="white-background">
						<div className="wrapper">
							<Fade left duration={400}>
								<h2>Contact Us</h2>
							</Fade>
							<Fade delay={400}>
							<div className={styles.socialMedia}>
								{
									contactInfo.map((x, i) => {
										return (
											<div className={styles.socialMediaEntry} key={x.platform}>
												<a href={x.link} target='_blank' rel='noopener noreferrer'>
													<img src={x.icon} alt={x.platform + ' Icon'} />
													<p className={styles.socialMediaLink}>{x.nameEntry}<ExternalLink/></p>
												</a>
											</div>
										)
									}
									)
								}
							</div>
							<div className={styles.contactDirectly}>
								<h3>Send Us a Direct Message</h3>
								<StyledButton link='/#contact-form' buttonText='Fill out our contact form'/>
							</div>
							</Fade>
						</div>
				</div>
			</Layout>
		)
	}
}

export default Contact
