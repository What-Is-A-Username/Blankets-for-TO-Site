import React from 'react'
import Img from 'gatsby-image'
import styles from './rewards-task.module.css'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

const RewardsTask = ({rewardItem, icon}) => {
	return (
        <div className={styles.item}>
            <Flip left>
                {icon}
            </Flip>
            <Fade delay={300}>
                <h3 className={styles.heading}>{rewardItem.heading}</h3>
                <p className={styles.points}>+{rewardItem.points} points</p>
                <p className={styles.description}>{rewardItem.description}</p>
            </Fade>
        </div>
    )
}

export default RewardsTask
