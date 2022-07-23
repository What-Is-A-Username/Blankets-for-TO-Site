import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './captioned-figure.module.css'

const CaptionedFigure = ({gatsbyImageData, title='', description='', hideCaption=false}) =>
{
    // var localization = 'en-US'
    // var deviceWidth = typeof window !== "undefined" ? $(window).width() : 760;
    // var width = Math.min(deviceWidth, 760);
    // var imgUrl = `https:${fields.file[localization].url}?w=${String(width)}`;
    // var description = (typeof fields.description !== 'undefined') ? fields.description[localization] : '';
    // var title = fields.title[localization]
    return (
        <figure className={styles.imgFigure}>
            <GatsbyImage image={gatsbyImageData} alt={title}/> 
            {!hideCaption && <figcaption>{description}</figcaption>}
        </figure>
    )
}

export default CaptionedFigure