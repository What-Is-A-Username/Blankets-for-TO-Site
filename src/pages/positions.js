import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Position from '../components/position'

import styles from '../page-styles/positions.module.css'

class Positions extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const positions = get(this, 'props.data.allContentfulPosition.edges')

    return (
      <Layout location={this.props.location}>
        <div className="white-background">
          <div className="wrapper">
            <h2>Open Positions</h2>
            <ul className={styles.positionList}>
            { positions.map( ({node}) => {
                return(<Position key={node.title} data={node}/>)}) }
            </ul>
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
