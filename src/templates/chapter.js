import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import SEO from '../components/SEO'
import { GatsbyImage } from 'gatsby-plugin-image'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import masterContactTemplate from '../pages/contact-info.json'
import BackArrow from '../components/back-arrow'
import CaptionedFigure from '../components/blog_embeds/captioned-figure'
import LinkSharing from '../components/link-sharing'
import * as styles from '../templates/chapter.module.css'

class ChapterTemplate extends React.Component {

	render() {
		const chapterData = get(this.props, 'data.contentfulBtoChapter')
        const {
			slug,
            chapterName,
            location,
            description,
            instagramUsername,
			emailAddress,
            membershipFormLink,
			chapterLogo,
			chapterLogoFluid,
        } = chapterData

		const { contactTemplates } = masterContactTemplate
		const chapterContact = [
			{
				platform: 'Email',
				linkSuffix: emailAddress,
				displayText: emailAddress,
				entry: emailAddress,
			},
			{
				platform: 'Instagram',
				linkSuffix: instagramUsername,
				displayText: '@' + instagramUsername,
				entry: instagramUsername,
			},
		].filter(method => method.entry != null)

		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) => {
					if (fields.file['en-US'].contentType.startsWith('image/'))
						return <CaptionedFigure fields={fields}/>
				},
			},
		};

		const requiredHead = [
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>,
			<div id="fb-root"></div>,
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="9bOR49xF"></script>,
		]

		return (
			<Layout location={this.props.location}>
				<div className="white-background">
					<SEO
						title={chapterName}
						metaType='article'
						description={`Connect with ${chapterName}, the official Blankets for T.O. local chapter at ${location}`}
						childElements={requiredHead}
						metaImage={chapterLogo.file.url}
						doNotCrawl
					/>
					<div className="wrapper">
						<h1 className={styles.title}>{chapterName}</h1>
						<div className={styles.horizontal}>
							<div className={styles.logo}>
								<GatsbyImage image={chapterLogoFluid.gatsbyImageData} alt={`Logo for ${chapterName}`}/> 
							</div>
							
							<div className={styles.info}>
								<h4 className={styles.subtitle}>Location</h4>
								<p className={styles.subtitleContent}>{location}</p>
								<h4 className={styles.subtitle}>Membership Application Link</h4>
								{ membershipFormLink ? 
									<a href={membershipFormLink}>Access the application form here.</a> : 
									<p className={styles.subtitleContent}>Please contact the chapter via email or social media for how to join and contribute.</p>
								}
								<h4 className={styles.subtitle}>Contact Links</h4>
								{
									chapterContact.map(social => 
										{
											var matchingTemplate = contactTemplates.find(template => template.platform === social.platform)
											return(
												<div className={styles.socialMediaEntry} key={matchingTemplate.platform}>
													<a href={`${matchingTemplate.linkRoot}${social.linkSuffix}`}
														target='_blank'
														rel='noopener noreferrer'>
														<img src={matchingTemplate.icon} alt={matchingTemplate.platform + 'Icon'}/>
														{social.displayText}
													</a>
												</div>
											)
										})
								}
							</div>
						</div>
						{/* <h3 className={styles.descriptionHeader}>Description</h3> */}
						<div className={'richText'}>
							{description != null ? documentToReactComponents(JSON.parse(description.raw), options) : <p>Error: Description not found.</p>}
						</div>
						<BackArrow text='View other chapters' link='/chapters'/> 
						<LinkSharing location={'https://blanketsforto.ca/chapter/' + slug}/>
					</div>
				</div>
			</Layout>

		)
	}
}

export default ChapterTemplate

export const chapterQuery = graphql`
	query BtoChapterBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		contentfulBtoChapter(slug: { eq: $slug }) { 
			slug
			chapterName
            location
            description {
                raw
            }
			chapterLogo {
				file {
				  	url
				}
			}
			chapterLogoFluid : chapterLogo {
				gatsbyImageData(
					width: 600,
					height: 600,
					layout: CONSTRAINED
					placeholder: BLURRED
				)
			}
            instagramUsername
			emailAddress
            membershipFormLink
		}
	}
`
