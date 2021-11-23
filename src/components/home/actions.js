import React from 'react'
import { Link } from 'gatsby'
import StyledButton from '../styled-button'

import styles from './actions.module.css'

export default (props) => {

    // Text for the join us and contact us widgets
    const actionInfo = [
        {
            title: 'Educating', 
            description: 'Tackling homelessness requires understanding its causes and consequences. We leverage social media posts, online blogging, academic research and in-person events to educate the public about homelessness in Canada.',
        },
        {
            title: 'Advocating', 
            description: 'Change requires a voice to be heard. We communicate homelessness issues to local leaders, to make sure that the needs and concerns of the homeless community are considered and addressed.'
        }, 
        {
            title: 'Engaging', 
            description: 'Building a community of motivated and like-minded members allows for sustainable change. We organize events for the University of Toronto student community in order to get them involved with advocacy and donation initiatives.',
        },
        {
            title: 'Donating', 
            description: 'We work with local shelters to supply them with the essential supplies that they need. These items include hygiene products, masks and hand sanitizers, blankets, food, and much more.',
        },
    ]

    return(
        <div>
            <div className={styles.actionsGrid}>
            {
                actionInfo.map(action =>
                    {
                        return(
                            <div className={styles.infoText}>
                                <h1>{action.title}</h1>
                                <p>{action.description}</p>
                            </div> 
                        )
                    })
            }
            </div> 
        </div>
    )
}