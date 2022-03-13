import React from 'react'
import $ from 'jquery'
import styles from './captioned-figure.module.css'

const CaptionedFigure = ({fields, hideCaption=false}) =>
{
    var localization = 'en-US'
    var deviceWidth = typeof window !== "undefined" ? $(window).width() : 760;
    var width = Math.min(deviceWidth, 760);
    var imgUrl = `https:${fields.file[localization].url}?w=${String(width)}`;
    var description = (typeof fields.description !== 'undefined') ? fields.description[localization] : '';
    var title = fields.title[localization]
    return (
        <figure className={styles.imgFigure} style={{width: width}}>
            <img src={imgUrl} alt={title}/> 
            {!hideCaption && <figcaption>{description}</figcaption>}
        </figure>
    )
}

export default CaptionedFigure