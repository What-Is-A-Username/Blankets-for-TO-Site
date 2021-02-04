import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import updateListStyles from '../page-styles/index.module.css'
import styles from '../templates/blog-post.module.css'

class BlogPostTemplate extends React.Component {

  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
        <img src={fields.file['en-US'].url} 
          style={{
            width: fields.file['en-US'].details.image.width, 
          }}
          alt={fields.description}
        />,
      },
    };

    return (
      <Layout location={this.props.location}>
        <div className="white-background">
          <SEO title={post.title} metaType={`article`} 
            description={`${post.publishDate} - ${post.description.childMarkdownRemark.rawMarkdownBody}`}/>
          <div className="wrapper">
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.publishDate}> {post.publishDate} </p>
            <div className={styles.richText} >
            {post.richTextBody != null ? documentToReactComponents(post.richTextBody.json, options) : <p>Error: Article not found.</p>}
            </div>
          </div>
          <hr className={styles.horizontalLine}></hr>
            {/* Updates */}
            <div className={updateListStyles.updates}>
              <h2>Most Recent Updates and Articles</h2>
              <ArticlePreview articles={posts}></ArticlePreview>
              <Link to="/blog" className={styles.links}>
                <button className={updateListStyles.btn} type="submit">Browse all updates</button>
              </Link>
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
            rawMarkdownBody
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
