import React from 'react'
import { navigate } from 'gatsby'
import { alink, previewText, previewTitle, previewPublishDate } from './podcast-card.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import StyledButton from '../styled-button'

const PodcastCard = ({podcast}) => {
	
	const episodeLink = `/podcasts/beyond-the-blankets/${podcast.slug}`

	return (
		<div onClick={() => navigate(episodeLink)} className={alink} key={podcast.episodeName}>
			<div className={previewText}>
				<h3 className={previewTitle}>{`Episode ${podcast.episodeNumber}: ${podcast.episodeName}`}</h3>
				<span className={previewPublishDate}>{podcast.publishDate}</span>
				<div className='richText'>
					{podcast.richDescription.raw !== undefined ? documentToReactComponents(JSON.parse(podcast.richDescription.raw)) : <p>Error: Articles not found.</p>}
				</div>
			</div>
			<StyledButton buttonText='Listen now' link={episodeLink}/>
		</div>
    )
}

export default PodcastCard
