import React from 'react' 
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

import styles from './sponsor.module.css'

const Sponsor = ({sponsorData}) => {
    const { name, logo, linkUrl } = sponsorData;
    return(
        <div className={styles.parentContainer}>
            <div className={styles.awardContainer}>
                <div className={styles.image}>
                    <a href={linkUrl} target='blank' rel='noopener noreferrer'>
                        <Img fluid={logo.fluid} alt={name}></Img>
                    </a>
                </div>
            </div>
        </div>
    )
}

Sponsor.propTypes = {
    name: PropTypes.string.isRequired, 
    sponsorType: PropTypes.string.isRequired, 
    linkUrl: PropTypes.string.isRequired
}

export default Sponsor;