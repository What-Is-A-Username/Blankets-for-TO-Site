import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Position from '../components/position'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


import styles from '../page-styles/positions.module.css'

class Positions extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const positions = get(this, 'props.data.allContentfulPosition.edges')
    const membershipInfo = get(this, 'props.data.allContentfulOrganizationInformationMembershipInformationRichTextNode.edges')[0].node

    return (
      <Layout location={this.props.location}>
        <div className="white-background">
          <div className="wrapper">
            <div className={styles.membershipInfo}>
              <h2>Membership</h2>
              {membershipInfo.json !== undefined ? documentToReactComponents(membershipInfo.json) : <p>Error: Articles not found.</p>}
            </div>
            <h2>Volunteering and Executive Positions</h2>
            {positions.length == 0 ? 
            <ul className={styles.positionList}>
            { positions.map( ({node}) => {
                return(<Position key={node.title} data={node}/>)}) }
            </ul> : <h3 className={styles.noPositionText}>Unfortunately, Blankets for Toronto is not currently recruiting for new volunteer roles or executive positions.</h3>}
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
