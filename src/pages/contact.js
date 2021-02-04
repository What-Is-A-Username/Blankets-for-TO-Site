import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import styles from '../page-styles/contact.module.css'

class Contact extends React.Component {
  render() {
    const contactInfo = get(this, 'props.data.allContentfulOrganizationInformation.edges')
    const node = contactInfo[0].node
    const officeHours = get(this, 'props.data.allContentfulOrganizationInformationOfficeHoursTextNode.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title="Contact Us"
          description="Want to reach out to Blankets for T.O. to join, collaborate, or ask a question? Connect to us through any of contact details or social media links shown here."/>
        <div className="white-background">
          {/* Image + Organization Title in Center  */}

          {/* { console.log(officeHours[0].node.childMarkdownRemark) }  */}
          <div>
            <div className="wrapper">
              <h2>Contact Us</h2>

              <div className={styles.contactDetails}>
                {node.emailAddress != "null" ? 
                  <div>
                    <h4>{`Email `}</h4>
                    <a>{node.emailAddress}</a>
                  </div> : null
                }
                {node.facebook != "null" ? 
                  <div>
                    <h4>{`Facebook `}</h4>
                    <a href={node.facebookLink}>{node.facebook}</a>
                  </div> : null
                }
                {node.instagram != "null" ? 
                  <div>
                    <h4>{`Instagram`}</h4>
                    <a href={node.instagramLink}>{node.instagram}</a>
                  </div> : null
                }
                {node.twitter != "null" ? 
                  <div>
                    <h4>{`Twitter`}</h4>
                    <a href={node.twitterLink}>{node.twitter}</a>
                  </div> : null
                }
                {node.tikTok != "null" ? 
                  <div>
                    <h4>{`Tiktok`}</h4>
                    <a>{node.tikTok}</a>
                  </div> : null
                }
                {node.officeAddress != "null" ? 
                  <div>
                    <h4>{`Office`}</h4>
                    <a>{node.officeAddress}</a>
                    <div className={styles.officeHours}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: officeHours[0].node.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  </div> : null
                }
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
