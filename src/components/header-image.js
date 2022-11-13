import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Animation from '../components/animate/animation'
import { parent, fluidImage, textBox, title, subtitle } from './header-image.module.css'

const HeaderImage = ({imgFluid, headerTitle, headerSubtitle}) => {
	return (
		<div className={parent}>
            <GatsbyImage image={imgFluid} className={fluidImage} alt={`Header image for ${headerTitle}`}/>
            <div className={textBox}>
                <Animation fade>
                    <h1 className={title}>{headerTitle}</h1>
                    {(headerSubtitle === undefined || headerSubtitle !== "") ? <p className={subtitle}>{headerSubtitle}</p> : <p/>}
                </Animation>
            </div>
        </div>
    )
}

export default HeaderImage