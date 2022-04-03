import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './podcast-card.module.css'
import Fade from 'react-reveal/Fade'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import StyledButton from '../styled-button'


const PodcastCard = ({podcast}) => {
	
	const episodeLink = `/podcasts/beyond-the-blankets/${podcast.slug}`

	return (
			<div onClick={() => navigate(episodeLink)} className={styles.alink} key={podcast.episodeName}>
				<div className={styles.previewText}>
					<h3 className={styles.previewTitle}>{`Episode ${podcast.episodeNumber}: ${podcast.episodeName}`}</h3>
					<div className='richText'>
						{podcast.richDescription.json !== undefined ? documentToReactComponents(podcast.richDescription.json) : <p>Error: Articles not found.</p>}
					</div>
				</div>
				<StyledButton buttonText='Listen now' link={episodeLink}/>
			</div>
    )
}

export default PodcastCard
