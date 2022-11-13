import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { imgFigure } from './captioned-figure.module.css'

const CaptionedFigure = ({gatsbyImageData, title='', description='', hideCaption=false}) =>
{
    return (
        <figure className={imgFigure}>
            <GatsbyImage image={gatsbyImageData} alt={title}/> 
            {!hideCaption && description !== '' && <figcaption>{description}</figcaption>}
        </figure>
    )
}

export default CaptionedFigure