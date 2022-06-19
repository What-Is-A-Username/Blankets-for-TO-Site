import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import LinkSharing from '../components/link-sharing'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SpotifyEmbed from '../components/blog_embeds/spotify-embed'

import blogStyles from './blog-post.module.css'
import styles from './episode.module.css'
import BackArrow from '../components/back-arrow'
import { ChevronDown, ChevronUp } from 'react-feather'

class EpisodeTemplate extends React.Component {

	state = { transcriptVisible: false }

	toggleTranscript = () => {
		this.setState({transcriptVisible: !this.state.transcriptVisible})
	}

	render() {

		const requiredHead = [
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8" key="twitter-widget"></script>,
			<div id="fb-root" key="fb-root"></div>,
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="9bOR49xF" key="facebook-widget"></script>,
		]
		const episode = get(this.props, 'data.contentfulPodcast')

		return (
			<Layout location={this.props.location}>
				<div className="white-background">
					<SEO
						title={episode.episodeName}
						metaType='article'
						childElements={requiredHead}
						description={episode.shortDescription.shortDescription}
						doNotCrawl
					/>
					<div className="wrapper">
						<BackArrow text='Browse all episodes' link='/podcasts'/>
						<h1 className={blogStyles.title}>{`Episode ${episode.episodeNumber}: ${episode.episodeName}`}</h1>
						<p className={blogStyles.publishDate}>{episode.publishDate}</p>
						<div className={'richText ' + blogStyles.bodyParent}>
							<div className={blogStyles.body}>
								{episode.richDescription != null ? documentToReactComponents(episode.richDescription.json) : <p>Error: Episode description not found.</p>}
							</div>
						</div>
						<h3 className={styles.subtitle}>Listen Now</h3>
						<SpotifyEmbed link={episode.spotifyEpisode.link}/>
						<h3 className={styles.subtitle}>Resource Links and Show Notes</h3>
						<div className={'richText'}>
							<div className={blogStyles.body}>
								{episode.richTextResources != null ? documentToReactComponents(episode.richTextResources.json) : <p>Error: Episode description not found.</p>}
							</div>
						</div>
						<LinkSharing location={`https://blanketsforto.ca/podcasts/beyond-the-blankets/${episode.slug}`}/>
						{
							episode.showTranscript ?
							<React.Fragment>
								<h3 className={styles.subtitle}>Transcript</h3>
								{
									this.state.transcriptVisible && 
									<div className={styles.expandTranscriptParent}>
										<div className={styles.expandTranscript} onClick={() => this.toggleTranscript()}>
											<p>Hide transcript</p>
											<ChevronUp/>
										</div>
									</div>
								}
								<div className={'richText' + ' ' + (this.state.transcriptVisible ? styles.transcriptVisible : styles.transcriptInvisible)} >
									<div className={blogStyles.body}>
										{episode.richTextTranscript != null ? documentToReactComponents(episode.richTextTranscript.json) : <p>Error: Episode description not found.</p>}
									</div>
								</div>
								<div className={styles.expandTranscriptParent}>
									<div className={styles.expandTranscript} onClick={() => this.toggleTranscript()}>
										<p>{this.state.transcriptVisible ? "Hide transcript" : "Read more"}</p>
										{this.state.transcriptVisible ? <ChevronUp/> : <ChevronDown/>}
									</div>
								</div>
							</React.Fragment>
							:
							null
						}
						<BackArrow text='Browse all episodes' link='/podcasts'/>
					</div>
				</div>
			</Layout>
		)
	}
}

export default EpisodeTemplate

export const episodeQuery = graphql`
	query EpisodeBySlug($slug: String!) {
		contentfulPodcast(slug: { eq: $slug }) {
            slug
			episodeName
			shortDescription {
				shortDescription
			}
            richDescription {
                json
            }
            publishDate(formatString: "MMMM Do, YYYY")      
			episodeNumber
            spotifyEpisode {
                link
            }
			showTranscript
			richTextResources
			{
				json
			}
			richTextTranscript 
			{
				json
			}
		}
	}
`
