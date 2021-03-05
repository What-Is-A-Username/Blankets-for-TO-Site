import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from '../components/SEO'
import styles from '../page-styles/positions.module.css'

class Positions extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const positions = get(this, 'props.data.allContentfulPosition.edges')
    const membershipInfo = get(this, 'props.data.allContentfulOrganizationInformationMembershipInformationRichTextNode.edges')[0].node

    const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSeHwKycp_JU4hGtpMlzKGP6idBUBnUVRUewN12Ak7zX6PwAEQ/viewform?usp=sf_link"

    return (
      <Layout location={this.props.location}>
        <SEO title="Membership and Volunteering"
          description="Support Blankets for T.O. by signing up to become a member today! Join the community to be eligible for exclusive offers and volunteering opportunities."/>
        <div className="white-background">
          <div className="wrapper">
            <div className={styles.membershipInfo}>
              <h2>Membership and Volunteering</h2>
              <div className="richText">
              {membershipInfo.json !== undefined ? documentToReactComponents(membershipInfo.json) : <p>Error: Articles not found.</p>}
              </div>
              <Link to={formLink} className='links' target="_blank" rel="noopener noreferrer">
                <button className='btn' type="submit">Sign Up Now</button>
              </Link>
            </div>
            {/* {positions.length == 0 ? 
            <ul className={styles.positionList}>
            { positions.map( ({node}) => {
                return(<Position key={node.title} data={node}/>)}) }
            </ul> : <h3 className={styles.noPositionText}>Unfortunately, Blankets for T.O. is not currently recruiting for new volunteer roles or executive positions.</h3>} */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Positions

export const positionPageQuery = graphql`
  query PositionQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulOrganizationInformationMembershipInformationRichTextNode {
      edges {
        node {
          json
        }
      }
    }
    allContentfulPosition {
      edges {
        node {
          title
          positionDescription {
            childMarkdownRemark {
                html
            }
          }
          requirements
          submission
          deadline(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
