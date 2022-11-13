import React from 'react'
import Countup from 'react-countup'
import stats from './stats-highlights-data.json'
import PropTypes from 'prop-types'
import Animation from '../animate/animation'

import { parentContainer, parentTitle, items, itemContainer, itemNumber, itemTitle, itemSubtitle } from './stats-highlight.module.css'

const StatsHighlight = ({donationItemCount}) => {
    const [counter, startCounter] = React.useState(false); 
    const statsToDisplay = stats.total;
    const { title } = stats; 
    
    return(
        <Animation fade>
            <div className={parentContainer}>
                <h1 className={parentTitle}>{title}</h1>
                <div className={items} >    
                {
                    statsToDisplay.map(item =>
                        {
                            return(
                                <Animation key={item.title} fade onReveal={() => { if (!counter) startCounter(true) }}>
                                    <div className={itemContainer} key={`Statistics for ${item.title}`}>
                                        <Countup redraw className={itemNumber} end={donationItemCount} useEasing separator='' duration={5} prefix={item.prefix ?? ''}></Countup>
                                        <h2 className={itemTitle}>{item.title ?? ''}</h2>
                                        <p className={itemSubtitle}>{item.subtitle ?? ''}</p>
                                    </div> 
                                </Animation>
                            )
                        }
                    )
                }
                </div>
            </div>
        </Animation>
    )
} 

StatsHighlight.propTypes = {
    donationItemCount: PropTypes.number.isRequired,
}

export default StatsHighlight; 