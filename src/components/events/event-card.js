import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { image, textContent, card, readMoreLine, title, datetime } from './event-card.module.css'

const EventCard = ({eventData, onClickEvent}) => {
    return(
        <div className={card} onClick={onClickEvent}>
            <div className={image}>
                <GatsbyImage image={eventData.smallPreviewImage.gatsbyImageData} alt={eventData.smallPreviewImage.description}/>
            </div>
            <div className={textContent}>
                <h3 className={title}>{eventData.eventName}</h3>
                <p className={datetime}>{eventData.eventDate}</p>
            </div>
            <p className={readMoreLine}>Read more</p>
        </div>
    )
}

export default EventCard;