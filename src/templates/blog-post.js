import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import updateListStyles from '../page-styles/index.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
          
        {/* {console.log(post)} */}
        <div className="white-background">
        <div style={{marginTop: "50px"}}></div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          {/* <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div> */}
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: post.description.childMarkdownRemark.html,
              }}
            /> */}
            {post.richTextBody != null ? documentToReactComponents(post.richTextBody.json) : <p>Error: Article not found.</p>}
          </div>
            {/* Updates */}
            <div className={updateListStyles.updates}>
                        <h2>Other Updates</h2>
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
