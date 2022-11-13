import React from 'react' 
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ExternalLink } from 'react-feather'
import {sponsorContainer, imageSpacing, image, infoContainer, descriptionStyle, linksStyle, mainLinkStyle } from './sponsor.module.css'

const Sponsor = ({sponsorData}) => {
    const { name, logo, links, description, mainLink } = sponsorData;
    const linkPrompt = 'Visit'; 

    return(
        <div className={sponsorContainer}>
            <div className={imageSpacing}>
                <div className={image}>
                    <GatsbyImage image={logo.gatsbyImageData} alt={name} imgStyle={{ objectFit: "contain" }}/>
                </div>
            </div>
            <div className={infoContainer}>
                {
                    description &&
                    <div className={descriptionStyle}
                    dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                    }}
                    />
                }
                <div className={linksStyle}>
                    <a className={mainLinkStyle} href={mainLink} title={` `}>{linkPrompt}<ExternalLink/></a>
                    {
                        links &&
                        <div className={linksStyle}
                            dangerouslySetInnerHTML={{
                                __html: links.childMarkdownRemark.html,
                            }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

Sponsor.propTypes = {
    name: PropTypes.string.isRequired, 
    sponsorType: PropTypes.string.isRequired, 
    linkUrl: PropTypes.string.isRequired
}

export default Sponsor;