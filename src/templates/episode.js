import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import LinkSharing from '../components/link-sharing'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SpotifyEmbed from '../components/blog_embeds/spotify-embed'

import blogStyles from './blog-post.module.css'
import styles from './episode.module.css'
import BackArrow from '../components/back-arrow'

class EpisodeTemplate extends React.Component {

	state = { transcriptVisible: false }

	render() {

		const episode = get(this.props, 'data.contentfulPodcast')

		return (
			<Layout location={this.props.location}>
				<div className="white-background">
					<SEO
						title={episode.episodeName}
						metaType='article'
						description={episode.shortDescription.shortDescription}
						doNotCrawl
					/>
					<div className="wrapper">
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
						<h3 className={styles.subtitle}>Transcript</h3>
						<div className={'richText'}>
							<div className={blogStyles.body}>
								{episode.richTextTranscript != null ? documentToReactComponents(episode.richTextTranscript.json) : <p>Error: Episode description not found.</p>}
							</div>
						</div>
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
