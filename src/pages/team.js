import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Member from '../components/member'
import SEO from '../components/SEO'

import styles from '../page-styles/team.module.css'

class Team extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const members = get(this, 'props.data.allContentfulExecutive.edges')

        return (
            <Layout location={this.props.location}>
                <SEO title="Team"
                  description="Meet the talented and motivated members of the team at Blankets for T.O. that makes all of our events possible."/>
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
          linkedIn
          linkedInLink
          photo {
            fluid(
                maxWidth: 540
                maxHeight: 540
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
