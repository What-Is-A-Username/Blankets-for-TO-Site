import React from 'react'
import styles from './popup.module.css'

export default class Popup extends React.Component {

    state = { open: true }
    
    close = () => {
        console.log(this.state)
        this.setState({ open: false });
    }

    render() {
        return(
        <div className={styles.popupBlocker + ' ' + (this.state.open ? styles.open : styles.closed)}>
            
        <div className={styles.popup}>
            {/* <link href="cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css"/> */}
            <div className={styles.mc_embed_signup} id="mc_embed_signup">
                <form action="https://gmail.us7.list-manage.com/subscribe/post?u=c190e10f2b62c767274e1197b&amp;id=bb77b2010f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll" className='mc_embed_signup scroll'>
                        <h2 for="mce-EMAIL">Sign up for our mailing list!</h2>
                        <input className={styles.emailBox} type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                        <div style= {{position:'absolute', left:'-5000px' }} aria-hidden="true">
                            <input type="text" name="b_c190e10f2b62c767274e1197b_bb77b2010f" tabindex="-1" value=""/>
                        </div>
                        <div class="clear" className={styles.button}>
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
                        </div>
                    </div>
                </form>
                <a className={styles.escapeButton} onClick={() => this.close()}>Maybe later...</a>
            </div>
        </div>
        </div>
        ) 
    }
}