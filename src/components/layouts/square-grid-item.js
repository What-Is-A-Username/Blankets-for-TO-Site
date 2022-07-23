import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './square-grid.module.css'
import { ChevronRight } from 'react-feather'
import PropTypes from 'prop-types'

const SquareGridItem = ({itemData}) => 
{
    const { title, description, link, gatsbyImageData } = itemData 

    return(
        <div className={styles.tile} key={title}>
            <div className={styles.imageOverlay}>
                <GatsbyImage image={gatsbyImageData} style={{width: "100%", height: "100%"}} alt={`Image preview of ${title}`}/>
            </div>
            <div className={styles.textBox}>
                <h1 className={styles.title}>{title}<ChevronRight/></h1>
                <p className={styles.description}>{description}</p>
            </div>
            <a className={styles.link} href={link}></a>
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