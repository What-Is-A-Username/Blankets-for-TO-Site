import React from 'react'
import styles from './stats-highlight.module.css'
import Countup from 'react-countup'
import Fade from 'react-reveal/Fade'
import stats from './stats-highlights-data.json'

const StatsHighlight = () => {

    const [counter, startCounter] = React.useState(false); 

    return(
        <Fade onReveal={() => {if (!counter) startCounter(true)}}>
            <div className={styles.parentContainer}>
                <h1 className={styles.parentTitle}>
                    Our donations to the homeless community include 
                </h1>
                <div className={styles.items} >    
                {
                    stats.figures.map(item =>
                        {
                            return(
                                <Fade>
                                    <div className={styles.item}>
                                        <Countup redraw className={styles.itemNumber} end={item.number} useEasing separator=" " duration={5} prefix={item.prefix ?? ''}></Countup>
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

export default StatsHighlight; 