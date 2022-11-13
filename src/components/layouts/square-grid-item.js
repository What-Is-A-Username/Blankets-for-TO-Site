import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { tile, imageOverlay, textBox, titleStyle, descriptionStyle, linkStyle} from './square-grid.module.css'
import { ChevronRight } from 'react-feather'
import PropTypes from 'prop-types'

const SquareGridItem = ({itemData}) => 
{
    const { title, description, link, gatsbyImageData } = itemData 

    return(
        <div className={tile} key={title}>
            <div className={imageOverlay}>
                <GatsbyImage image={gatsbyImageData} style={{width: "100%", height: "100%"}} alt={`Image preview of ${title}`}/>
            </div>
            <div className={textBox}>
                <h1 className={titleStyle}>{title}<ChevronRight/></h1>
                <p className={descriptionStyle}>{description}</p>
            </div>
            <a className={linkStyle} href={link}></a>
        </div>
    )
}

SquareGridItem.propTypes = {
    itemData: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string,
                link: PropTypes.string.isRequired,
                gatsbyImageData: PropTypes.any,
        }).isRequired
}

export default SquareGridItem