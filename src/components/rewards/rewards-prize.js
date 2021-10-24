import React from 'react'
import styles from './rewards-prize.module.css'
import Fade from 'react-reveal/Fade'

const RewardsPrize = ({rewardPrize}) => {
	return (
        
            <Fade>
        <div className={styles.prize}>
            <div className={styles.text}>
                <h3 className={styles.heading}>{rewardPrize.name}</h3>
                <p className={styles.points}>{rewardPrize.pointsRequired} points</p>
                <p className={styles.description}>{rewardPrize.description ? rewardPrize.description.description : ''}</p>
            </div>
        </div>
            </Fade>
    )
}

export default RewardsPrize
