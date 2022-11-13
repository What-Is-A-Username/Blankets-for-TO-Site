import React from 'react'
import StyledButton from '../styled-button'

import {slideshow, contactBox, contactBoxSide, contactBoxSideText, contactBoxTitle, contactBoxDescription, buttonRow } from './contact-box.module.css'

export default (props) => {

    // Text for the join us and contact us widgets
    const contactInfo = [
        {
            title: 'Donate', 
            description: 'Make a monetary or item donation to the organization! Inquire about donating anything, from blankets to clothing to hygiene products.',
            link: '/donate',
            buttonText: 'Make a donation',
        },
        {
            title: 'Join', 
            description: 'Become part of the Blankets For T.O. community and be part of the change! Want to join as a member? Interested in volunteering at events?',
            link: '/positions',
            buttonText: 'Become a member' 
        }
    ]

    return(
        <div className={slideshow}>
            <div className={contactBox}>
                {contactInfo.map(x => {
                    return(
                        <div className={contactBoxSide} key={x.title}>
                            <div className={contactBoxSideText}>
                                <h2 className={contactBoxTitle}>{x.title}</h2>
                                <p  className={contactBoxDescription}>{x.description}</p>
                                <div className={buttonRow}>
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