import React from 'react'
import styles from './youtube-embed.module.css'

const YoutubeEmbed = ({node}) =>
{
    var frameSrc = node.data.target.fields.watchKey['en-US']
    return (
        <div className={styles.parent}>
            <iframe src={`https://www.youtube.com/embed/${frameSrc}`} width="560" height="315" frameborder="0"></iframe>
        </div>
    );
}

export default YoutubeEmbed