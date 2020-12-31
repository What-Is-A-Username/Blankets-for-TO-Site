import React from 'react'
import Img from 'gatsby-image'

import leftBackgroundImageSource from '../components/images/skyline.jpg'
import rightBackgroundImageSource from '../components/images/skyline.jpg'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from '../page-styles/index.module.css'

class RootIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const organizationBlurb = get(this, 'props.data.allContentfulOrganizationInformation.edges')

        return (
            <Layout location={this.props.location}>
                <div className="white-background">
                    {/* Image + Organization Title in Center  */}

                    <div className={styles.title}>
                        <Img className={styles.backgroundImage} fluid={organizationBlurb[0].node.frontPageImage.fluid}></Img>
                        {/* <img className={styles.backgroundImage} src="https://www.flaticon.com/svg/static/icons/svg/124/124021.svg" /> */}
                        <h1>Blankets for Toronto</h1>
                    </div>

                    {/* Description, centered  */}
                    <div className={styles.description}>
                        <h2>Our Organization</h2>
                        {/* {console.log(organizationBlurb[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb)} */}
                        <p>{organizationBlurb[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb}</p>
                    </div>

                    {/* Updates */}
                    <div className={styles.updates}>
                        <h2>News and Updates</h2>
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

                    {/* Contact Us Widget  */}
                    <div className={styles.contactBox}>
                        {/* Volunteer */}
                        <div className={styles.contactBoxSide}>
                            <img className={styles.backgroundImage} src={leftBackgroundImageSource} />
                            <div>
                                <h2>Join Us</h2>
                                <p>Keep in touch with our organization to join the community and stay updated!</p>
                                <form action="./contact/">
                                    <button className={styles.btn} type="submit">Volunteering</button>
                                </form>
                            </div>
                        </div>
                        {/* Join */}
                        <div className={styles.contactBoxSide}>
                            <img className={styles.backgroundImage} src={rightBackgroundImageSource} />
                            <div>
                                <h2>Volunteering</h2>
                                <p>Volunteering is a great way to contribute to a great cause!</p>
                                <form action="./positions/">
                                    <button className={styles.btn} type="submit">Volunteering</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulOrganizationInformation {
        edges {
          node {
            childContentfulOrganizationInformationOrganizationFrontBlurbTextNode {
              organizationFrontBlurb
              
            }
            frontPageImage {
                fluid(
                    resizingBehavior: FILL
                    background: "rgb:000000"
                  ) {
                    ...GatsbyContentfulFluid_tracedSVG
                  }
            }
            leftBackgroundImage {
                fluid(
                    resizingBehavior: FILL
                    background: "rgb:000000"
                  ) {
                    ...GatsbyContentfulFluid_tracedSVG
                  }
            }
            rightBackgroundImage {
                fluid(
                    resizingBehavior: FILL
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
