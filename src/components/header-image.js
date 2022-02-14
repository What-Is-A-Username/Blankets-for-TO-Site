import React from 'react'
import Img from 'gatsby-image'
import styles from './header-image.module.css'
import Fade from 'react-reveal/Fade'

const HeaderImage = ({imgFluid, headerTitle, headerSubtitle}) => {
	return (
		<div className={styles.parent}>
            <Img fluid={imgFluid} className={styles.fluidImage}/>
            <div className={styles.textBox}>
                <Fade>
                    <h1 className={styles.title}>{headerTitle}</h1>
                    {(headerSubtitle === undefined || headerSubtitle !== "") ? <p className={styles.subtitle}>{headerSubtitle}</p> : <p/>}
                </Fade>
            </div>
        </div>
    )
}

export default HeaderImage