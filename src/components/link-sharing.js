import React from 'react'
import PropTypes from "prop-types" 

import { linkContainer, socials, twitterShareButton, link, linkField, linkIcon, linkFieldButtonClicked, linkFieldButtonNormal, linkCopyButton } from './link-sharing.module.css'
import { Check, Copy, Facebook, Link, Twitter } from 'react-feather'

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
        this.setState({ linkCopied: true },
            () => {
                let timeout = setTimeout(() => {
                    this.setState({ linkCopied: false, timer: timeout })
                }
                    , 3000)
            }
        )
    }

    render() {
        const shareIconsSize = 20;

        return (
            <div className={linkContainer}>
                <div className={socials}>
                    <a className={twitterShareButton} href={"https://twitter.com/intent/tweet?url="+ encodeURIComponent(this.props.location)} target="_blank" title="Share on Twitter">
                        <Twitter size={shareIconsSize}/>
                        Tweet
                    </a>
                    
                    <a className={twitterShareButton} href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.props.location)} target="_blank" title="Share on Facebook">
                        <Facebook size={shareIconsSize}/>
                        Share
                    </a>
                    
                </div>
                <div className={link}>
                    <div className={linkField}>
                        <p className={linkIcon} onClick={this.state.linkCopied ? () => {} : () => this.copyLink()} title="Copy this page's link">
                            <Link size={shareIconsSize} color='white'/>
                        </p>
                        <input type="text" value={this.props.location} id="linkAddress" readOnly />
                        {/* <button className={this.state.linkCopied ? linkFieldButtonClicked : linkFieldButtonNormal} onClick={() => this.copyLink()}>{this.state.linkCopied ? "Copied!" : <Copy/>}</button> */}
                        <p className={linkCopyButton} onClick={this.state.linkCopied ? () => {} : () => this.copyLink()} title="Copy this page's link">
                            {this.state.linkCopied ?
                            <Check color='limegreen' size={shareIconsSize*1.25}/> :
                            <Copy size={shareIconsSize} color='white'/>}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }
}

export default LinkSharing;
