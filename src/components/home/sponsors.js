import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './sponsors.module.css'
import Img from 'gatsby-image'

export default () => {

    const { allContentfulSponsor } = useStaticQuery(SponsorsQuery);
    const nodes = allContentfulSponsor.edges.map(x => x.node);
    const preferredSponsors = nodes.filter(x => x.sponsorType === 'Preferred'); 
    const defaultSponsors = nodes.filter(x => x.sponsorType !== 'Preferred');
    
    const constructSponsorRow = (sponsorList) => {
        return(
            <div className={styles.logoContainer}>
                {sponsorList.map(x => {
                    return(
                        <a className={styles.alink} href={x.linkUrl} target="_blank" rel="noopener noreferrer">
                            <div className={styles.logo}>
                                <Img durationFadeIn={0} imgStyle={{ objectFit: "contain" }} alt={x.name} fluid={x.logo.fluid}/>
                            </div> 
                        </a>
                    )
                })} 
            </div>
        )
    }

    return(
        <div className={styles.sponsorBox}>
            {preferredSponsors.length > 0 && 
                <h2 className={styles.preferredSponsorsTitle}>
                    {"Preferred Sponsor" + (preferredSponsors.length > 1 ? "s" : "")}
                </h2> 
            }
            {preferredSponsors.length > 0 && constructSponsorRow(preferredSponsors)}
            {defaultSponsors.length > 0 && <div className={styles.divider}></div>}
            {defaultSponsors.length > 0 && 
                <h2 className={styles.secondarySponsorsTitle}>
                    {"Sponsor" + (defaultSponsors.length > 1 ? "s" : "")}
                </h2>
            }
            {defaultSponsors.length > 0 && constructSponsorRow(defaultSponsors)}
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
                        fluid(
                            maxHeight: 100
                            resizingBehavior: SCALE
                            background: "rgb:000000")
                        {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                    sponsorType
                    linkUrl
                }
            }
        }
    }
`
