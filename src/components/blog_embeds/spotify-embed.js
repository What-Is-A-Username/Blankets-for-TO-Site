import React from 'react'
import * as styles from './spotify-embed.module.css'

const SpotifyEmbed = ({data}) =>
{
    const { link } = data
    var frameSrc = link.replace('episode', 'embed-podcast/episode').split('?')[0];
    return (
        <div className={styles.parent}>
            {console.warn('iframe missing a unique `title` attribute')}
            <iframe src={frameSrc} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
}

export default SpotifyEmbed