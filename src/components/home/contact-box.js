import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import StyledButton from '../styled-button'

import * as styles from './contact-box.module.css'

export default (props) => {

    // Text for the join us and contact us widgets
    const contactInfo = [
        {
            title: "Join us", 
            description: 'Become part of the Blankets For T.O. community and be part of the change! Want to join as a member? Interested in volunteering at events?',
            link: '/positions',
            buttonText: 'Become a Volunteer or Member' 
        },
        {
            title: 'Contact us', 
            description: 'Keep in touch and join the community to stay updated! Got an idea for an initiative? Want to collaborate with us? Send us a message via email or over social media!',
            link: '/contact',
            buttonText: 'Contact',
        }
    ]

    return(
        <div className={styles.slideshow}>
            <div className={styles.contactBox}>
                {contactInfo.map(x => {
                    return(
                        <div className={styles.contactBoxSide} key={x.title}>
                            <div className={styles.contactBoxSideText}>
                                <h2 className={styles.contactBoxTitle}>{x.title}</h2>
                                <p  className={styles.contactBoxDescription}>{x.description}</p>
                                <div className={styles.buttonRow}>
                                <StyledButton  link={x.link} buttonText={x.buttonText} isWhite/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}