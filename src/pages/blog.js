import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticleEntry from '../components/blog-list'
import SEO from '../components/SEO'

import styles from '../page-styles/blog.module.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title="Updates"/>
        <div className="white-background">
            <div style={{padding: "20px"}}></div>
          {/* <div className={styles.hero}>Blog</div> */}
          <div className="wrapper">
            <h2 className="section-headline">All Updates and Articles</h2>
            <div className={styles.blog_list}>
              {posts.map(({ node }) => {
                return (
                  <div key={node.slug}>
                    <ArticleEntry article={node}/>
                  </div>
                )
              })}
            </div>
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 20) {
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