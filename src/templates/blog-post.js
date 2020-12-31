import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
        
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
    site {
      siteMetadata {
        title
      }
    }
  }
`
