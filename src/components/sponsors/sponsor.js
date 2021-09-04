import React from 'react' 
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import { ExternalLink } from 'react-feather'

import styles from './sponsor.module.css'

const Sponsor = ({sponsorData}) => {
    const { name, logo, links, description, mainLink } = sponsorData;
    const hoverLinkPromppt = 'Visit'; 
    const linkPrompt = 'Visit'; 

    return(
        <div className={styles.sponsorContainer}>
            <Fade>
                <div className={styles.imageSpacing}>
                    <div className={styles.image}>
                        <Img fluid={logo.fluid} alt={name} imgStyle={{ objectFit: "contain" }}/>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    {
                        description &&
                        <div className={styles.description}
                        dangerouslySetInnerHTML={{
                            __html: description.childMarkdownRemark.html,
                        }}
                        />
                    }
                    <div className={styles.links}>
                        <a className={styles.mainLink} href={mainLink} title={`${hoverLinkPromppt} ${name}`}>{linkPrompt}<ExternalLink/></a>
                        {
                            links && 
                            <div className={styles.links}
                                dangerouslySetInnerHTML={{
                                    __html: links.childMarkdownRemark.html,
                                }}
                            />
                        } 
                    </div>
                </div>
            </Fade>
        </div>
    )
}

Sponsor.propTypes = {
    name: PropTypes.string.isRequired, 
    sponsorType: PropTypes.string.isRequired, 
    linkUrl: PropTypes.string.isRequired
}

export default Sponsor;