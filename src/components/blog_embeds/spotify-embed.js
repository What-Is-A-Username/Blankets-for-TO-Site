import React from 'react'
import StyledButton from '../styled-button';
import styles from './spotify-embed.module.css'

const SpotifyEmbed = ({node = undefined, link = undefined}) =>
{
    if (node !== undefined)
    {
        link = node.data.target.fields.link['en-US']
    }
    var frameSrc = link.replace('episode', 'embed-podcast/episode').split('?')[0];
    return (
        <div className={styles.parent}>
            <iframe src={frameSrc} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
}

export default SpotifyEmbed