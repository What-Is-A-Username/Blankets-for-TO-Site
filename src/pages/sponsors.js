import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/SEO'


import Animation from '../components/animate/animation'
import HeaderImage from '../components/header-image'
import SponsorIcon from '../components/sponsors/sponsor'

import { pitchStyle, titles, sponsorsGrid } from '../page-styles/sponsors-page.module.css'

// The /sponsors page on the site.
export default class Sponsors extends React.Component {
    render() {
        const sponsorData = get(this, 'props.data.allContentfulSponsor.nodes');
        const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const preferredSponsors = sponsorData.filter(x => x.sponsorType === "Preferred");
        const defaultSponsors = sponsorData.filter(x => x.sponsorType !== "Preferred");
        const message = 'Blankets for T.O. is proud to work with the following sponsors to fund donations and work with the local community.'
        const pitch = 'Interested in sponsoring Blankets for T.O. or supporting our initiatives? '
        return (
            <Layout location={this.props.location}>
                <SEO title="Sponsors"
                    description={message} />
                <div className="white-background">
                    <HeaderImage imgFluid={imgFluid} headerTitle='Sponsors' headerSubtitle='' />
                    <div className="wrapper">
                        <Animation fade left animationDuration={400}>
                            <div className='richText'>
                                <p>{message}</p>
                                <p className={pitchStyle}>{pitch}
                                    <a href='/contact'>Contact us to discuss options.</a>
                                </p>
                            </div>
                            <div className='richText' />
                        </Animation>
                        <div className={'richText'}>
                            {
                                preferredSponsors.length > 0 &&
                                <React.Fragment>
                                    <h3 className={titles}>{"Preferred Sponsor" + (preferredSponsors.length > 1 ? "s" : "")}</h3>
                                    <div className={sponsorsGrid}>
                                        {
                                            preferredSponsors.map((x, index) => {
                                                return (
                                                    <Animation fade style={{ height: 'min-content' }}>
                                                        <SponsorIcon key={index} sponsorData={x} />
                                                    </Animation>
                                                )
                                            })
                                        }
                                    </div>
                                </React.Fragment>
                            }
                            {
                                defaultSponsors.length > 0 &&
                                <React.Fragment>
                                    <h3 className={titles}>Sponsors</h3>
                                    <div className={sponsorsGrid}>
                                        {
                                            defaultSponsors.map((x, index) => {
                                                return (
                                                    <Animation fade style={{ height: 'min-content' }}>
                                                        <SponsorIcon key={index} sponsorData={x} />
                                                    </Animation>
                                                )
                                            })
                                        }
                                    </div>
                                </React.Fragment>
                            }
                        </div>
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
