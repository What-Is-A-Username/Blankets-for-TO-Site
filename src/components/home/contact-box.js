import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './contact-box.module.css'

export default (props) => {

    // Text for the join us and contact us widgets
    const contactInfo = [
        {
            title: "Join Us", 
            description: 'Become part of the Blankets For T.O. community and be part of the change! Want to join as a member? Interested in volunteering at events?',
            link: '/positions',
            buttonText: 'Become a Volunteer or Member' 
        },
        {
            title: 'Contact Us', 
            description: 'Keep in touch and join the community to stay updated! Got an idea for an initiative? Want to collaborate with us? Send us a message via email or over social media!',
            link: '/contact',
            buttonText: 'Contact Us',
        }
    ]

    return(
        <div className={styles.slideshow}>
            <div className={styles.imageCover}>
                <Img style={{position: 'absolute'}} fluid={props.left}/>
                <div className={styles.imageLayer}></div>
            </div>
            <div className={styles.contactBox}>
                {contactInfo.map(x => {
                    return(
                        <div className={styles.contactBoxSide}>
                            <div className={styles.contactBoxSideText}>
                                <h2 className={styles.contactBoxTitle}>{x.title}</h2>
                                <p  className={styles.contactBoxDescription}>{x.description}</p>
                                <Link to={x.link} className='links'>
                                    <button className='btn' type="submit">{x.buttonText}</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}