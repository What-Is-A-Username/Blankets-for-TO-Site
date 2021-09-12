import React from 'react' 
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Fade from 'react-reveal/Fade'
import SponsorIcon from '../components/sponsors/sponsor'

import styles from '../page-styles/sponsors-page.module.css'
import { graphql } from 'gatsby'

// The /sponsors page on the site.
export default class Sponsors extends React.Component {

    render() {
        const sponsorData = get(this, 'props.data.allContentfulSponsor.nodes');
        const preferredSponsors = sponsorData.filter(x => x.sponsorType === "Preferred"); 
        const defaultSponsors = sponsorData.filter(x => x.sponsorType !== "Preferred"); 
        const message = 'Blankets for T.O. is proud to work with the following sponsors to fund donations and work with the local community.'
        const pitch = 'Interested in sponsoring Blankets for T.O. or supporting our initiatives? '
        return(
        <Layout location={this.props.location}>
            <SEO title="Sponsors"
                description={message}/>
            <div className="white-background">
                <div className="wrapper">
                    <Fade left duration={400}>
                        <h2>Sponsors</h2>
                        <div className='richText'>
                            <p>{message}</p>
                            <p className={styles.pitch}>{pitch}
                                <a href='/contact'>Contact us to discuss options.</a>
                            </p>
                        </div>
                        <div className='richText'>
                            
                        </div>
                    </Fade>
                    <Fade delay={500}>
                        <div className={'richText'}>
                        <h3 className={styles.titles}>Preferred Sponsors</h3>
                        <div className={styles.sponsorsGrid}>
                        {
                            preferredSponsors.map(x => {
                                return(
                                    <SponsorIcon sponsorData={x}/>
                                    )
                                })
                            }
                        </div>
                        <h3 className={styles.titles}>Sponsors</h3>
                        <div className={styles.sponsorsGrid}>
                            {
                            defaultSponsors.map(x => {
                                return(
                                    <SponsorIcon sponsorData={x}/>
                                    )
                                })
                            }
                            </div>
                        </div>
                        
                    </Fade>
                </div>
            </div> 
        </Layout>
        )
    }
} 

export const SponsorsQuery = graphql`
query SponsorsPageQuery {
        allContentfulSponsor(sort: {fields: name}) {
            nodes {
                name
                sponsorType
                logo {
                    fluid(maxHeight: 200, resizingBehavior: SCALE) {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
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

/*

            */