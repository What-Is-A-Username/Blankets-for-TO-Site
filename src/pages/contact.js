import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import HeaderImage from '../components/header-image'
import ContactForm from '../components/home/contact-form'

import contactData from '../pages/contact-info.json'

import * as styles from '../page-styles/contact.module.css'

import { ExternalLink } from 'react-feather'

class Contact extends React.Component {
	render() {
		const contactInfo = contactData.contact

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = ''
        const headerTitle = 'Contact Us'

		return (
			<Layout location={this.props.location}>
				<SEO title='Contact Us'
					description='Want to reach out to Blankets for T.O. to join, collaborate, or ask a question? Connect to us through our contact details or social media links here.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className={styles.socialMedia}>
							{
								contactInfo.map((x, i) => {
									return (
										<div className={styles.socialMediaEntry} key={x.platform}>
											<a href={x.link} target='_blank' rel='noopener noreferrer'>
												<img src={x.icon} alt={x.platform + ' Icon'} />
												<p>{x.nameEntry}<ExternalLink/></p>
											</a>
										</div>
									)
								}
								)
							}
						</div>
					</div>
					<ContactForm shortenInfo/>
				</div>
			</Layout>
		)
	}
}

export default Contact

export const contactQuery = graphql`
	query ContactQuery {
		allContentfulHeaderImage(filter: {pageName: {eq: "Contact"}}, limit: 1) {
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

