import React from 'react' 
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

import styles from './sponsor.module.css'

const Sponsor = ({sponsorData}) => {
    const { name, logo, sponsorType, linkUrl } = sponsorData;
    return(
        <div className={styles.parentContainer}>
            <div className={styles.awardContainer}>
                <div className={styles.image}>
                    <Img  fluid={logo.fluid} alt={name}></Img>
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