import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from '../page-styles/contact.module.css'

class Contact extends React.Component {
    render() {
        const contactInfo = get(this, 'props.data.allContentfulOrganizationInformation.edges')
        const node = contactInfo[0].node
        const officeHours = get(this, 'props.data.allContentfulOrganizationInformationOfficeHoursTextNode.edges')

        return (
            <Layout location={this.props.location}>
                <div className="white-background">
                    {/* Image + Organization Title in Center  */}

                    {/* { console.log(officeHours[0].node.childMarkdownRemark) }  */}
                    <div>
                        <div className="wrapper">
                            <h2>Contact Us</h2>
                            
                            <div className={styles.contactDetails}>
                            <h4>{`Email `}</h4>
                                <p>{node.emailAddress}</p>
                                <h4>Facebook</h4>
                                <a href={node.facebook}>Click Here</a>
                                <h4>Instagram</h4>
                                <a href={node.instagram}>Click Here</a>
                                <h4>Twitter</h4>
                                <a href={node.twitter}>Click Here</a>
                                <h4>TikTok</h4>
                                <a href={node.tikTok}>Click Here</a>
                                <h4>Office</h4>
                                <p>{node.officeAddress}</p>
                                <h4>{`Office Hours`}</h4>
                                <div className={styles.officeHours}>
                                    <div 
                                        dangerouslySetInnerHTML={{
                                            __html: officeHours[0].node.childMarkdownRemark.html,
                                        }}
                                        />    
                                </div>    
                            </div>           
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact

export const ContactQuery = graphql`
query ContactQuery {
    allContentfulOrganizationInformation {
      edges {
        node {
          emailAddress
          facebook
          instagram
          officeAddress
          phoneNumber
          tikTok
          twitter
        }
      }
    }
    allContentfulOrganizationInformationOfficeHoursTextNode {
        edges {
          node {
            childMarkdownRemark {
              html
            }
          }
        }
      }
  }
`
