import React from 'react'
import { graphql, navigate } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import updateListStyles from '../page-styles/index.module.css'
import styles from '../templates/blog-post.module.css'
import { update } from 'lodash'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
          
        {/* {console.log(post)} */}
        <div className="white-background">
        <div className="wrapper"></div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p className={styles.publishDate}> {post.publishDate} </p>
            <div>
            {post.richTextBody != null ? documentToReactComponents(post.richTextBody.json) : <p>Error: Article not found.</p>}
            </div>
          </div>
          <hr className={styles.horizontalLine}></hr>
            {/* Updates */}
            <div className={updateListStyles.updates}>
              <h2>Most Recent Updates and Articles</h2>
              <ArticlePreview articles={posts}></ArticlePreview>
              <form action="/blog/">
                <button className={updateListStyles.btn} type="submit">Browse all updates</button>
              </form>
            </div>
          </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
        edges {
          node {
            title
            slug
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
