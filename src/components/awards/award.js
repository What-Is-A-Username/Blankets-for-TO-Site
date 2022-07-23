import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from '../awards/award.module.css'

const Award = ({awardData}) => {
    const { awardName, image, date } = awardData;
    const { description } = awardData.description; 

    return(
        <div className={styles.parentContainer}>
            <div className={styles.awardContainer}>
                <div className={styles.image}>
                    <GatsbyImage image={image.gatsbyImageData} alt={awardName}/>
                </div>
                <div className={'richText ' + styles.infoContainer}>
                    <h3>{awardName}</h3>
                    <h5>{date}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Award;