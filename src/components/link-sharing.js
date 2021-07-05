import React, {setState} from 'react'
import PropTypes from "prop-types"

import styles from './link-sharing.module.css'

class LinkSharing extends React.Component {
    state = { linkCopied: false, timer: -1 }

    static propTypes = { 
        location: PropTypes.string.isRequired,
    }

    copyLink = () => {
        if (this.state.linkCopied) return; 
        var copyText = document.getElementById("linkAddress");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        this.setState({linkCopied: true}, 
            () => {
                let timeout = setTimeout(() => {
                    this.setState({linkCopied: false, timer: timeout})}
                , 1000)
            }
        ) 
    }

    render() { 
        return (
            <div className={styles.linkContainer}>
                <div className={styles.socials}>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-related="blanketsforto" data-show-count="false">
                    Tweet
                </a>
                <div id="fb-root"></div>,
			    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="9bOR49xF"></script>
                <div className="fb-like" data-href={this.props.location} data-width="" data-layout="button" data-action="like" data-size="large" data-share="false">
                </div>
                <div className="fb-share-button" data-href={this.props.location} data-layout="button" data-size="large">
                    <a href={"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location)} target="_blank" alt="Share on Facebook" className="fb-xfbml-parse-ignore">Share</a>
                </div>
                </div>
                <div className={styles.link}>
                    <div className={styles.linkField}>
                        <input style={{width: this.props.location.length + 'ch'}} type="text" value={this.props.location} id="linkAddress" readOnly/>
                        <button className={this.state.linkCopied ? styles.linkFieldButtonClicked : styles.linkFieldButtonNormal} onClick={() => this.copyLink()}>{this.state.linkCopied ? "Copied!" : "Copy URL"}</button>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount()
    {
        clearTimeout(this.state.timer)
    }
}

export default LinkSharing;
