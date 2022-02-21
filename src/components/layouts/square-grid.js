import React from 'react'
import SquareGridItem from "./square-grid-item"
import styles from './square-grid.module.css'
import PropTypes from 'prop-types'

const SquareGrid = ({content}) => 
{
    return(
        <div className={styles.gridContainer}>
            {
                content.map(x => {
                    return(
                        <SquareGridItem itemData={x}/>
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
            fluid: PropTypes.any,
        })
    ).isRequired
}
    
export default SquareGrid