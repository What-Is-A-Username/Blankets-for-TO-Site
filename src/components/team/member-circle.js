import React, {useState} from 'react'
import Img from 'gatsby-image'
import styles from './member-circle.module.css'
import emailImage from '../images/email.svg'
import twitterImage from '../images/twitter.svg'
import facebookImage from '../images/facebook.svg'
import instagramImage from '../images/instagram.svg'
import linkedInImage from '../images/linkedin.svg'
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
            { alt: "Email", platform: data.email, link: data.email, icon: emailImage },
            { alt: "Facebook", platform: data.facebook, link: data.facebookLink, icon: facebookImage },
            { alt: "Instagram", platform: data.insta, link: data.instagramLink, icon: instagramImage },
            { alt: "Twitter", platform: data.twitter, link: data.twitterLink, icon: twitterImage },
            { alt: "LinkedIn", platform: data.linkedIn, link: data.linkedInLink, icon: linkedInImage },
        ]
        
        return(
            <div className={styles.memberCard}>
                {data.photo === null ? 
                    <img className={styles.memberPortrait} src={placeholderPortrait} alt={`Placeholder portrait of ${data.title}`}></img>
                    :  
                    <Img className={styles.memberPortrait} fluid={data.photo.fluid} alt={`Portrait of ${data.title}`}/>
                }
                <div className={styles.memberInformation}>
                    <h3 className={styles.name}>{data.name}</h3>
                    <h4 className={styles.title}>{data.title}</h4>
                    {/* <div className={this.state.showDescription ? styles.description : styles.descriptionFaded}
                        dangerouslySetInnerHTML={{
                        __html: data.shortBio.childMarkdownRemark.html,
                        }}
                    /> */}
                    {/* {
                        !this.state.showDescription ? 
                        <a className={styles.descriptionButton} onClick={() => this.clickShowMore()}>
                            Read more
                        </a>
                        :
                        <a className={styles.descriptionButton} onClick={() => this.clickHide()}>
                            Show less
                        </a>
                    } */}
                    <div className={styles.memberContact}>
                        {
                            contact.map(x => { return(
                                x.platform && 
                                <div className={styles.memberContactEntry} key={data.name+" "+x.platform}>
                                    <a className={styles.memberContactLink} href={x.alt !== "Email" ? x.link : `mailto:${x.platform}`} target="_blank" rel="noopener noreferrer">
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
