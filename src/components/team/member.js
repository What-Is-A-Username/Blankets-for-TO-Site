import React from 'react'
import Img from 'gatsby-image'
import styles from './member.module.css'
import emailImage from '../images/email.svg'
import twitterImage from '../images/twitter.svg'
import facebookImage from '../images/facebook.svg'
import instagramImage from '../images/instagram.svg'
import linkedInImage from '../images/linkedin.svg'
import placeholderPortrait from '../images/placeholderperson.png';

export default ({ data }) => { 

    const contact = [
        { alt: "Email", platform: data.email, link: data.email, icon: emailImage },
        { alt: "Facebook", platform: data.facebook, link: data.facebookLink, icon: facebookImage },
        { alt: "Instagram", platform: data.insta, link: data.instagramLink, icon: instagramImage },
        { alt: "Twitter", platform: data.twitter, link: data.twitterLink, icon: twitterImage },
        { alt: "LinkedIn", platform: data.linkedIn, link: data.linkedInLink, icon: linkedInImage },
    ]
    
    return(
    <div className={styles.memberCard}>
        <div style={{height:"100%"}}>
        {data.photo === null ? 
        <img className={styles.memberPortrait} src={placeholderPortrait} alt="Placeholder portrait."></img> : 
        <Img className={styles.memberPortrait} fluid={data.photo.fluid} alt={`Portrait of ${data.name} (${data.title})`}/> }
        </div>
        
        <div className={styles.memberInformation}>
            <h3 className={styles.name}>{data.name}</h3>
            <h4 className={styles.title}>{data.title}</h4>
            <div className={styles.description}
                dangerouslySetInnerHTML={{
                __html: data.shortBio.childMarkdownRemark.html,
                }}
            />
            <div className={styles.memberContact}>
                {
                    contact.map(x => { return(
                        x.platform && 
                        <div key={data.name+" "+x.platform}>
                            <a href={x.alt !== "Email" ? x.link : `mailto:${x.platform}`} target="_blank" rel="noopener noreferrer">
                                <img src={x.icon} alt={`${x.alt} Icon`}/>{x.platform}
                            </a>
                        </div> 
                    )})
                } 
            </div>
        </div>
    </div>
)}
