import React from 'react'
import styles from './stats-highlight.module.css'
import Countup from 'react-countup'
import Fade from 'react-reveal/Fade'
import stats from './stats-highlights-data.json'
import PropTypes from 'prop-types'

const StatsHighlight = ({donationItemCount}) => {

    const [counter, startCounter] = React.useState(false); 
    const statsToDisplay = stats.total;
    const { title } = stats;

    return(
        <Fade onReveal={() => {if (!counter) startCounter(true)}}>
            <div className={styles.parentContainer}>
                <h1 className={styles.parentTitle}>{title}</h1>
                <div className={styles.items} >    
                {
                    statsToDisplay.map(item =>
                        {
                            return(
                                <Fade key={item.title}>
                                    <div className={styles.item}>
                                        <Countup redraw className={styles.itemNumber} end={donationItemCount} useEasing separator='' duration={5} prefix={item.prefix ?? ''}></Countup>
                                        {/* <h1 className={styles.itemNumber}>{item.number}</h1> */}
                                        <h2 className={styles.itemTitle}>{item.title ?? ''}</h2>
                                        <p className={styles.itemSubtitle}>{item.subtitle ?? ''}</p>
                                    </div> 
                                </Fade>
                            )
                        }
                    )
                }
                </div>
            </div>
        </Fade>
    )
} 

StatsHighlight.propTypes = {
    donationItemCount: PropTypes.number.isRequired,
}

export default StatsHighlight; 