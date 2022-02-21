import React from 'react'
import Img from 'gatsby-image'
import styles from './square-grid.module.css'
import { ChevronRight } from 'react-feather'
import PropTypes from 'prop-types'

const SquareGridItem = ({itemData}) => 
{
    const { title, description, link, fluid } = itemData 

    return(
        <div className={styles.tile} key={title}>
            <div className={styles.imageOverlay}>
                <Img fluid={fluid} style={{width: "100%", height: "100%"}}/>
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
    itemData: PropTypes.arrayOf(
        PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string,
                link: PropTypes.string.isRequired,
                fluid: PropTypes.any,
        })
    ).isRequired
}

export default SquareGridItem