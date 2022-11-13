import React from 'react'
import { iframeParent } from './youtube-embed.module.css'

const YoutubeEmbed = ({data}) =>
{
    const { watchKey } = data
    return (
        <div className={iframeParent}>
            {console.warn('iframe missing a unique `title` attribute')}
            <iframe src={`https://www.youtube.com/embed/${watchKey}`} width="560" height="315" frameBorder="0"></iframe>
        </div>
    );
}

export default YoutubeEmbed