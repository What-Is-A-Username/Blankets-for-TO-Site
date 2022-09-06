import React from 'react'
import * as styles from './stats-highlight.module.css'
import Countup from 'react-countup'
import stats from './stats-highlights-data.json'
import PropTypes from 'prop-types'
import Animation from '../animate/animation'

const StatsHighlight = ({donationItemCount}) => {
    const [counter, startCounter] = React.useState(false); 
    const statsToDisplay = stats.total;
    const { title } = stats; 
    
    return(
        <Animation fade>
            <div className={styles.parentContainer}>
                <h1 className={styles.parentTitle}>{title}</h1>
                <div className={styles.items} >    
                {
                    statsToDisplay.map(item =>
                        {
                            return(
                                <Animation key={item.title} fade onReveal={() => { if (!counter) startCounter(true) }}>
                                    <div className={styles.item} key={`Statistics for ${item.title}`}>
                                        <Countup redraw className={styles.itemNumber} end={donationItemCount} useEasing separator='' duration={5} prefix={item.prefix ?? ''}></Countup>
                                        <h2 className={styles.itemTitle}>{item.title ?? ''}</h2>
                                        <p className={styles.itemSubtitle}>{item.subtitle ?? ''}</p>
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