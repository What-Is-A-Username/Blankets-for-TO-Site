import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Member from '../components/member'
import Sidebar from '../components/navigation-sidebar'

import styles from '../page-styles/team.module.css'

class Team extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const members = get(this, 'props.data.allContentfulExecutive.edges')

        return (
            <Layout location={this.props.location}>
                <div className="sidebarabove"></div>
                <div className="white-background">
                    <div className="wrapper">
                        <h2>Executive Team</h2>
                        <div className={styles.positionList}>
                            {members.map(({ node }) => {
                                return (node.name !== "John Doe" ? <Member key={node.name} data={node} /> : null)
                            })}

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Team

export const teamPositionQuery = graphql`
  query TeamQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulExecutive(sort : {fields: [isFounder, name], order: DESC}) {
      edges {
        node {
          name
          isFounder
          title
          shortBio {
            childMarkdownRemark {
                html
            }
          }
          email
          facebook
          facebookLink
          insta
          instagramLink
          twitter
          twitterLink
          photo {
            fluid(
                maxWidth: 1180
                maxHeight: 480
                resizingBehavior: PAD
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
          }
        }
      }
    }
  }
`
