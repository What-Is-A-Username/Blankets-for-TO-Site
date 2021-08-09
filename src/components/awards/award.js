import React from 'react' 
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

import styles from '../awards/award.module.css'

const Award = ({awardData}) => {
    const { awardName, image, date } = awardData;
    const { description } = awardData.description; 

    return(
        <div className={styles.parentContainer}>
            <div className={styles.awardContainer}>
            {/* <Img fluid={image.fluid}></Img> */}
                <div className={styles.image}>
                    <Img fluid={image.fluid} alt={awardName}></Img>
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

Award.propTypes = {
    
}

export default Award;