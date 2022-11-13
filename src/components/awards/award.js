import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'
import { parentContainer, awardContainer, imageContainer, infoContainer } from './award.module.css'

const Award = ({awardData}) => {
    const { awardName, image, date } = awardData;
    const { description } = awardData.description; 

    return(
        <div className={parentContainer}>
            <div className={awardContainer}>
                <div className={imageContainer}>
                    <GatsbyImage image={image.gatsbyImageData} alt={awardName}/>
                </div>
                <div className={'richText ' + infoContainer}>
                    <h3>{awardName}</h3>
                    <h5>{date}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Award;