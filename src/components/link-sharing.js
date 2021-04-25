import React from 'react'
import PropTypes from "prop-types"

import styles from './link-sharing.module.css'

const LinkSharing = ({location}) => {

    const copyLink = () => {
        var copyText = document.getElementById("linkAddress");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
    }

    const facebookShareLink = "https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location); 

    return(
        <div className={styles.linkContainer}>
            
            <div className={styles.socials}>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-related="blanketsforto" data-show-count="false">
                Tweet
            </a>

            <div class="fb-like" data-href={location} data-width="" data-layout="button" data-action="like" data-size="large" data-share="false">
            </div>

            <div class="fb-share-button" data-href={location} data-layout="button" data-size="large">
                <a href={facebookShareLink} target="_blank" alt="Share on Facebook" class="fb-xfbml-parse-ignore">Share</a>
            </div>
            </div>
            <div className={styles.link}>

                <div className={styles.linkField}>
                    <input style={{width: location.length + 'ch'}} type="text" value={location} id="linkAddress" readOnly/>
                    <button onClick={copyLink}>Copy URL</button>
                </div>
            </div>

        </div>
    )
}

export default LinkSharing;

LinkSharing.defaultProps = 

LinkSharing.propTypes = {
    location: PropTypes.string.isRequired, 
}