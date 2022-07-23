import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Animation from '../components/animate/animation'
import * as styles from './header-image.module.css'

const HeaderImage = ({imgFluid, headerTitle, headerSubtitle}) => {
	return (
		<div className={styles.parent}>
            <GatsbyImage image={imgFluid} className={styles.fluidImage} alt={`Header image for ${headerTitle}`}/>
            <div className={styles.textBox}>
                <Animation fade>
                    <h1 className={styles.title}>{headerTitle}</h1>
                    {(headerSubtitle === undefined || headerSubtitle !== "") ? <p className={styles.subtitle}>{headerSubtitle}</p> : <p/>}
                </Animation>
            </div>
        </div>
    )
}

export default HeaderImage