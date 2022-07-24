import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './member-circle.module.css'
import emailImage from '../images/email.svg'
import twitterImage from '../images/twitter.svg'
import facebookImage from '../images/facebook.svg'
import instagramImage from '../images/instagram.svg'
import linkedInImage from '../images/linkedin.svg'
import githubImage from '../images/github.png'
import websiteImage from '../images/link.png'
import placeholderPortrait from '../images/placeholderperson.png';

export default class MemberCircle extends React.Component { 

    state = { showDescription: false } 

    clickShowMore = () => {
        this.setState({showDescription: true}); 
    } 
    clickHide = () => {
        this.setState({showDescription: false}); 
    }

    render() {
        const { data } = this.props;

        const contact = [
            { alt: "Email", link: data.email, icon: emailImage },
            { alt: "Facebook", link: data.facebookLink, icon: facebookImage },
            { alt: "Instagram", link: data.instagramLink, icon: instagramImage },
            { alt: "Twitter", link: data.twitterLink, icon: twitterImage },
            { alt: "LinkedIn", link: data.linkedInLink, icon: linkedInImage },
            { alt: "GitHub", link: data.githubLink, icon: githubImage },
            { alt: "Website", link: data.websiteLink, icon: websiteImage }
        ]
        
        return(
            <div className={styles.memberCard}>
                {data.photo === null ? 
                    <img className={styles.memberPortrait} src={placeholderPortrait} alt={`Placeholder portrait of ${data.title}`}></img>
                    :  
                    <GatsbyImage className={styles.memberPortrait} image={data.photo.gatsbyImageData} alt={`Portrait of ${data.title}`}/>
                }
                <div className={styles.memberInformation}>
                    <h3 className={styles.name}>{data.name}</h3>
                    <h4 className={styles.title}>{data.title}</h4>
                    <div className={styles.memberContact}>
                        {
                            contact.map(x => { return(
                                x.link && 
                                <div className={styles.memberContactEntry} key={data.name+" "+x.alt}>
                                    <a className={styles.memberContactLink} href={x.alt !== "Email" ? x.link : `mailto:${x.link}`} target="_blank" rel="noopener noreferrer">
                                        <img className={styles.memberContactIcon} src={x.icon} alt={`${x.alt} Icon`}/>
                                    </a>
                                </div> 
                            )})
                        } 
                    </div>
                </div>
            </div>
        )
    }
}
