import React from 'react'
import SquareGridItem from "./square-grid-item"
import * as styles from './square-grid.module.css'
import PropTypes from 'prop-types'

const SquareGrid = ({content}) => 
{
    return(
        <div className={styles.gridContainer}>
            {
                content.map((x, index) => {
                    return(
                        <SquareGridItem key={index} itemData={x}/>
                    )
                })
            }
        </div>
    )
}

SquareGrid.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            link: PropTypes.string.isRequired,
            gatsbyImageData: PropTypes.any,
        })
    ).isRequired
}
    
export default SquareGrid