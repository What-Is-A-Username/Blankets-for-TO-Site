import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Animation from '../animate/animation'
import StyledButton from '../styled-button'

import { logoContainer, alink, logo, sponsorBox, title, preferredSponsorsTitle, secondarySponsorsTitle, divider } from './sponsors.module.css'

export default () => {

    const { allContentfulSponsor } = useStaticQuery(SponsorsQuery);
    const nodes = allContentfulSponsor.edges.map(x => x.node);
    const preferredSponsors = nodes.filter(x => x.sponsorType === 'Preferred'); 
    const defaultSponsors = nodes.filter(x => x.sponsorType !== 'Preferred');
    
    const constructSponsorRow = (sponsorList) => {
        return(
            <div className={logoContainer}>
                {sponsorList.map((x, i) => {
                    return(
                        <a className={alink} target="_blank" rel="noopener noreferrer" key={x.name}>
                            <Animation fade delay={150}>
                                <div className={logo}>
                                    <GatsbyImage imgStyle={{ objectFit: "contain" }} alt={x.name} image={x.logo.gatsbyImageData}/>
                                </div> 
                            </Animation>
                        </a>
                    )
                })} 
            </div>
        )
    }

    return(
        <div className={sponsorBox}>
            <Animation fade>
            <h1 className={title}>Thank you to our sponsors for their support!</h1>
            {preferredSponsors.length > 0 && 
                <h2 className={preferredSponsorsTitle}>
                    {"Preferred Sponsor" + (preferredSponsors.length > 1 ? "s" : "")}
                </h2> 
            }
            {preferredSponsors.length > 0 && constructSponsorRow(preferredSponsors)}
            {defaultSponsors.length > 0 && <div className={divider}></div>}
            {defaultSponsors.length > 0 && 
                <h2 className={secondarySponsorsTitle}>
                    {"Sponsor" + (defaultSponsors.length > 1 ? "s" : "")}
                </h2>
            }
            {defaultSponsors.length > 0 && constructSponsorRow(defaultSponsors)}
            <StyledButton buttonText='Browse sponsors' link='/sponsors'/>
            <div style={{height: '100px'}}></div>
            </Animation>
        </div>
    )
}

const SponsorsQuery = graphql`
    query SponsorsQuery {
        allContentfulSponsor(sort: {fields: name}) {
            edges {
                node {
                    name 
                    logo {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            height: 100
                        )
                    }
                    sponsorType
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
    }
`
