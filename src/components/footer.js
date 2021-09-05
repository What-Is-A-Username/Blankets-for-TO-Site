import React from 'react'
import { StaticQuery, graphql, Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './footer.module.css'
import emailImage from './images/contact/emailTransparent.svg'
import twitterImage from './images/contact/twitterTransparent.svg'
import facebookImage from './images/contact/facebookTransparent.svg'
import instagramImage from './images/contact/instagramTransparent.svg'
import tikTokImage from './images/contact/tiktokTransparent.svg'
import pageData from '../pages/page-data.json'
import FooterItem from './navigation/footer-item'

const Footer = (props) => {
	var contactInfo = props.allContentfulOrganizationInformation.edges
	const node = contactInfo[0].node
	const pages = pageData.pages

	const platform = ["Email", "Facebook", "Instagram", "Twitter", "TikTok"]
	const nameEntry = [node.emailAddress, node.facebook, node.instagram, node.twitter, node.tikTok]
	const link = ['mailto:' + node.emailAddress, node.facebookLink, node.instagramLink, node.twitterLink, node.tiktokLink]
	const icon = [emailImage, facebookImage, instagramImage, twitterImage, tikTokImage]
	const logo = props.allContentfulOrganizationInformation.nodes[0].organizationLogo

	const onClickLogo = () => {
        navigate('/')
    }

	return (
		<footer role="contentinfo" className={styles.footer}>
			<div className={styles.footerTop}>
				<div className={styles.left}>
					<div className={styles.logo} onClick={onClickLogo}>
						<Img fluid={logo.fluid}/>
					</div>
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
				</div>
				<div className={styles.right}>
					<ul className={styles.navigation}>
					{
						pages.map((page) => { return (<FooterItem page={page}/>)})
					}
					</ul>
				</div>
			</div>
			<div className={styles.credits}>
				<Link to={'/credits'}> Media Credits and Attribution</Link>
			</div>
		</footer>
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
                    allContentfulOrganizationInformation 
                    {
                        nodes 
                        {
                            organizationLogo 
                            {
                                fluid(maxHeight: 400, resizingBehavior: SCALE, background: "rgb:FFFFFF")
                                {
                                    ...GatsbyContentfulFluid_tracedSVG
                                }
                            }
                        }
					}
                }
			`}
			render={data => Footer(data)}
		/>
	)
}

