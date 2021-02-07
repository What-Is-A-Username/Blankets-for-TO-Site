import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import styles from './footer.module.css'
import emailImage from './images/contact/emailTransparent.svg'
import twitterImage from './images/contact/twitterTransparent.svg'
import facebookImage from './images/contact/facebookTransparent.svg'
import instagramImage from './images/contact/instagramTransparent.svg'
import tikTokImage from './images/contact/tiktokTransparent.svg'

const pages = [
  { to: "/", desc: "Home" },
  { to: "/about", desc: "About" },
  { to: "/team", desc: "Team" },
  { to: "/positions", desc: "Membership/Volunteering" },
  { to: "/contact", desc: "Contact" },
  { to: "/blog", desc: "Updates" },
]

const stuff = (props) => {
  var contactInfo = props.allContentfulOrganizationInformation.edges
  const node = contactInfo[0].node

  const platform = ["Email", "Facebook", "Instagram", "Twitter", "TikTok"] 
  const nameEntry = [node.emailAddress, node.facebook, node.instagram, node.twitter, node.tikTok]
  const link = ['mailto:' + node.emailAddress, node.facebookLink, node.instagramLink, node.twitterLink, ""]
  const icon = [emailImage, facebookImage, instagramImage, twitterImage, tikTokImage]

  return (
    <footer role="contentinfo" className={styles.footer}>
      <h1 className={styles.footerTitle}>
        Blankets for T.O.
      </h1>
      <div className={styles.socialMedia}>
        {
          nameEntry.map((x, i) => {
            return (
              x != "null" &&
              <div className={styles.socialMediaEntry}>
                <a href={link[i] != "" ? link[i] : '/contact'}
                   target={link[i] != "" ? '_blank' : ''}
                   rel="noopener noreferrer">
                  <img src={icon[i]} alt={platform[i] + " Icon"} />
                </a>
              </div>
            )
          }
          )
        }
      </div>
      <p className={styles.footerInfo}>
        An organization at the University of Toronto Scarborough.
      </p>
      <ul className={styles.navigation}>
        {
          pages.map((page) => {
            return (
              <li className={styles.navigationItem} key={page.desc}>
                <Link to={page.to}>{page.desc}</Link>
              </li>
            )
          })
        }
      </ul>
      
      <div className={styles.credits}>
        <Link to={'/credits'}>Media Credits and Attribution</Link>
      </div>
      <div>

      </div>
    </footer>
  )
}

export default () => {
  return (
    <StaticQuery
      query={graphql`
    query FooterQuery {
        allContentfulOrganizationInformation {
          edges {
            node {
              emailAddress
              facebook
              facebookLink
              instagram
              instagramLink
              officeAddress
              phoneNumber
              tikTok
              tiktokLink
              twitter
              twitterLink
            }
          }
        }
      }
    `}
      render={data => stuff(data)
      }
    />
  )
}

