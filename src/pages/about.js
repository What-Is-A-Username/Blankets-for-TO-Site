import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import ArticlePreview from '../components/article-preview'

import styles from '../page-styles/about.module.css'

class About extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const aboutPage = get(this, 'props.data.allContentfulOrganizationInformationAboutPageRichTextNode.edges')

        const node = aboutPage[0].node;

        return (
            <Layout location={this.props.location}>
                <div className="white-background">
                    <div className="wrapper">
                    {/* Description, centered  */}
                    <div className={styles.description}>
                        <h2>Our Organization</h2>
                        {node.json !== undefined ? documentToReactComponents(node.json) : <p>Error: Articles not found.</p>}
                    </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About

export const aboutPageQuery = graphql`
  query AboutQuery {
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
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulOrganizationInformationAboutPageRichTextNode {
        edges {
          node {
            json
          }
        }
      }
  }
`
