import React from 'react'
import Img from 'gatsby-image'
import styles from './member.module.css'
import emailImage from './images/emailicon.png'
import twitterImage from './images/twittericon.png'
import facebookImage from './images/facebook.png'
import instagramImage from './images/instagram.svg'
// https://www.flaticon.com/svg/static/icons/svg/124/124021.svg
import placeholderPortrait from './images/placeholderperson.png';

export default ({ data }) => (
    <div className={styles.memberCard}>
            <div style={{height:"100%"}}>
            {data.photo === null ? 
            <img src={placeholderPortrait}></img> : 
            <Img className={styles.memberPortrait} fluid={data.photo.fluid} /> }
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
                        data.email != null ? 
                        <div>
                            <img src={emailImage} alt="Email Icon" />
                            <p>{data.email}</p>
                        </div> 
                        : null
                    } 
                    {
                        data.facebook != null ? 
                        <div>
                            <img src={facebookImage} alt="Facebook Icon" />
                            <a href={data.facebookLink}>{data.facebook}</a>
                        </div>
                        : null
                    }
                    {
                        data.instagramHandle != null ? 
                        <div>
                            <img src={instagramImage} alt="Instagram Icon" />
                            <a href={data.instagramLink}>{data.instagramHandle}</a>
                        </div>
                        : null
                    } 
                    {
                        data.twitter != null ? 
                        <div>
                            <img src={twitterImage} alt="Twitter Icon" />
                            <a href={data.twitterLink}>{data.twitter}</a>
                        </div>
                        : null 
                    }
                </div>
        </div>
    </div>
)
