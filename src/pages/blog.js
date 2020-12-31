import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from '../page-styles/blog.module.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div className="white-background">
            <div style={{padding: "20px"}}></div>
          <Helmet title={siteTitle} />
          {/* <div className={styles.hero}>Blog</div> */}
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const blogPageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          richTextBody {
              json
          }
          publishDate(formatString: "MMMM Do, YYYY")      
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

 //   heroImage {
        //     fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
        //       ...GatsbyContentfulFluid_tracedSVG
        //     }
        //   }