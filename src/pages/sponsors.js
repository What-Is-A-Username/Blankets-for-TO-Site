import React from 'react' 
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import SponsorIcon from '../components/sponsors/sponsor'
import HeaderImage from '../components/header-image'
import * as styles from '../page-styles/sponsors-page.module.css'
import { graphql } from 'gatsby'
import Animation from '../components/animate/animation'

// The /sponsors page on the site.
export default class Sponsors extends React.Component {
    render() {
        const sponsorData = get(this, 'props.data.allContentfulSponsor.nodes');
        const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const preferredSponsors = sponsorData.filter(x => x.sponsorType === "Preferred"); 
        const defaultSponsors = sponsorData.filter(x => x.sponsorType !== "Preferred"); 
        const message = 'Blankets for T.O. is proud to work with the following sponsors to fund donations and work with the local community.'
        const pitch = 'Interested in sponsoring Blankets for T.O. or supporting our initiatives? '
        return(
        <Layout location={this.props.location}>
            <SEO title="Sponsors"
                description={message}/>
            <div className="white-background">
                <HeaderImage imgFluid={imgFluid} headerTitle='Sponsors' headerSubtitle=''/>
                <div className="wrapper">
                    <Animation fade left animationDuration={400}>
                        <div className='richText'>
                            <p>{message}</p>
                            <p className={styles.pitch}>{pitch}
                                <a href='/contact'>Contact us to discuss options.</a>
                            </p>
                        </div>
                        <div className='richText'/>
                    </Animation>
                    <Animation animationDelay={500}>
                        <div className={'richText'}>
                        {
                            preferredSponsors.length > 0 && 
                            <React.Fragment>
                                <h3 className={styles.titles}>{"Preferred Sponsor" + (preferredSponsors.length > 1 ? "s" : "")}</h3>
                                <div className={styles.sponsorsGrid}>
                                {
                                    preferredSponsors.map((x, index) => {
                                        return(
                                            <SponsorIcon key={index} sponsorData={x}/>
                                            )
                                        })
                                    }
                                </div>
                            </React.Fragment>
                        }
                        {
                            defaultSponsors.length > 0 &&
                            <React.Fragment>
                            <h3 className={styles.titles}>Sponsors</h3>
                            <div className={styles.sponsorsGrid}>
                                {
                                    defaultSponsors.map((x, index) => {
                                        return(
                                            <SponsorIcon key={index} sponsorData={x}/>
                                            )
                                        })
                                }
                                </div>
                            </React.Fragment>
                        }
                        </div>
                    </Animation>
                </div>
            </div> 
        </Layout>
        )
    }
} 

export const SponsorsQuery = graphql`
query SponsorsPageQuery {
    allContentfulHeaderImage(filter: {pageName: {eq: "Sponsors"}}, limit: 1) {
        nodes {
            image {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                )
            }
        }
    }
    allContentfulSponsor(sort: {fields: name}) {
        nodes {
            name
            sponsorType
            logo {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                )
            }
            description {
                childMarkdownRemark {
                    html
                }
            }
            mainLink
            links {
                childMarkdownRemark {
                    html
                }
            }
        }   
            
        }
    }
`
