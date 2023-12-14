import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { footer, footerTop, left, right, logoPadding, logoStyle, socialMedia, socialMediaEntry, navigation, credits }  from './footer.module.css'
import pageData from '../pages/page-data.json'
import FooterItem from './navigation/footer-item'
import contactData from '../pages/contact-info.json'

const Footer = (props) => {
	const contactInfo = contactData.contact
	const pages = pageData.pages.concat(pageData.footer)

	const logo = props.file.childImageSharp

	const onClickLogo = () => {
        navigate('/')
    }

	const clickManager = () => {
		try {
			if (typeof window !== 'undefined') {
				displayPreferenceModal()
			}
		}
		catch {
			console.log("Unable to display the cookie preference widget. Please try again later. Report to blanketsforto.site@gmail.com if issue persists.")
		}
	}

	return (
		<footer role="contentinfo" className={footer}>
			<div className={footerTop}>
				<div className={left}>
					<div className={logoStyle} onClick={onClickLogo}>
						<GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.'/>
					</div>
					
					<div className={socialMedia}>
						{
							contactInfo.map((x, i) => {
								return (
									<div className={socialMediaEntry} key={x.platform}>
										<a href={x.link}
											target='_blank'
											rel='noopener noreferrer'>
											<img src={x.icon} alt={x.platform + 'Icon'}/>
										</a>
									</div>
								)
							})
						}
					</div>
				</div>
				<div className={right}>
					<div className={navigation}>
					{
						pages.map((page) => { return (<FooterItem page={page} key={page.desc}/>)})
					}
					</div>
				</div>
			</div>
			<div className={credits}>
				<a href='/credits'>Media Credits and Attribution</a>
				<a href="https://app.termly.io/notify/2f159730-6b96-4595-81a4-860a387d21ae">
  					DSAR, Do not sell my info
				</a>
				<button
					className="termly-cookie-preference-button"
					type="button"
					onClick={clickManager}
				>
					Manage Cookie Preferences
				</button>
  
			</div>  
		</footer>
	)
}

export default () => {
	return (
		<StaticQuery
			query={graphql`
				query FooterQuery {
					file(relativePath: { eq: "bto_new_logo_transparent.png" }) {
						childImageSharp {
							gatsbyImageData(
								layout: FULL_WIDTH
								placeholder: BLURRED
							)
						}
                    }
                }
			`}
			render={data => Footer(data)}
		/>
	)
}

