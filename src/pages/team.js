import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import Animation from '../components/animate/animation'
import HeaderImage from '../components/header-image'
import Member from '../components/team/member-circle'

import * as styles from '../page-styles/team.module.css'

class Team extends React.Component {

  render() {
    const members = get(this, 'props.data.allContentfulExecutive.edges')

    const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
    const headerSubtitle = ''
    const headerTitle = 'Team'

    const teamOrder = ['Founders', 'Co-Presidents', 'Marketing Team', 'External Team', 'Internal Team']
    let teams = [] 
    teamOrder.forEach((key) => {
      teams.push({
        title: key,
        members: members.filter(member => member.node.team === key)
      })
    })

    return (
      <Layout location={this.props.location}>
        <SEO title='Executive Team'
          description='Meet the talented and motivated members of the team at Blankets for T.O. that makes all of our events possible.'
          doNotCrawl />
        <div className="sidebarabove"></div>
        <div className="white-background">
          <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle} />
          <div className="wrapper">
              {
                teams.map((team) => {
                  return(
                    <div>
                      <h2 className={styles.teamTitle}>{team.title}</h2>
                      <div className={styles.executiveList}>
                        {
                          team.members.map(({ node }) => {
                            return (
                              node.name !== 'John Doe' ?
                                <Animation fade left animationDelay={200} animationDuration={350} key={node.name} style={{ justifyContent: 'flex-start' }}>
                                  <Member data={node} />
                                </Animation> :
                                null
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </Layout>
    )
  }
}

export default Team

export const teamPositionQuery = graphql`query TeamQuery {
  site {
    siteMetadata {
      title
    }
  }
  allContentfulExecutive(sort: [{isFounder: DESC}, {name: ASC}]) {
    edges {
      node {
        name
        isFounder
        title
        email
        team
        facebookLink
        instagramLink
        twitterLink
        linkedInLink
        websiteLink
        githubLink
        photo {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 50)
        }
      }
    }
  }
  allContentfulHeaderImage(filter: {pageName: {eq: "Team"}}, limit: 1) {
    nodes {
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 80)
      }
    }
  }
}`
