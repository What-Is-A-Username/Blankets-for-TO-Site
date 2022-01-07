import React from 'react';
import Fade from 'react-reveal/Fade'
import styles from './contact-form.module.css'

export default () => {
    const description = 'Have any questions or inquiries? Send us a message by using this form.'

    return (
        <div id='contact-form' className={styles.formContainer}>
            <Fade left>
                <div className={styles.textBox}>
                    <h1 className={styles.title}>Send us a direct message</h1>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.link}>
                        <a href='/contact'>We're also reachable via social media and email!</a>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action={`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`} method="post">
                    <fieldset id="fs-frm-inputs">
                        <div className={styles.field}>
                            <label for="full-name">Your Name</label>
                            <input type="text" name="name" id="full-name" placeholder="Firstname Lastname" required="" />
                        </div>
                        <div className={styles.field}>
                            <label for="email-address">Contact Email Address</label>
                            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="" />
                        </div>
                        <div className={styles.field}>
                            <label for="message">Message</label>
                            <textarea rows="5" name="message" id="message" placeholder="Dear Blankets for T.O.," required=""></textarea>
                        </div>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                        <input type="text" name="_gotcha" style={{display: 'none'}}/>
                    </fieldset>
                    <div className={styles.submitButton}>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </Fade>
        </div>
    );
}
