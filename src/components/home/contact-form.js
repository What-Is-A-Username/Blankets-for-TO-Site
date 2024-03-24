import React from 'react';
import Animation from '../animate/animation'
import { ExternalLink } from 'react-feather';
import { formContainer, textBox, title, descriptionStyle, link, field, submitButton, form, fieldset, spamWarning } from './contact-form.module.css'

export default ({shortenInfo = false}) => {
    const description = 'Have any questions or inquiries? Send us a message via email or from here!'
    return (
        <Animation fade left>
            <div id='contact-form' className={formContainer}>
                <div className={textBox}>
                    <h1 className={title}>Send us a message</h1>
                    <p className={descriptionStyle}>{description}</p>
                    {
                        !shortenInfo && 
                        <div className={link}>
                            <a href='/contact'>Or visit our contact page <ExternalLink style={{marginLeft: '5px', marginTop: '5px'}}/></a>
                        </div>
                    }
                </div>
                <form className={form} id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action={`https://formspree.io/f/xzbopvpw`} method="post">
                    <fieldset id="fs-frm-inputs" className={fieldset}>
                        <div className={field}>
                            <label htmlFor="full-name">Your Name</label>
                            <input type="text" name="name" id="full-name" placeholder="Firstname Lastname" required aria-required/>
                        </div>
                        <div className={field}>
                            <label htmlFor="email-address">Contact Email Address</label>
                            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required aria-required/>
                        </div>
                        <div className={field}>
                            <label htmlFor="message">Message</label>
                            <textarea rows="5" name="message" id="message" placeholder="Dear Blankets for T.O.," required aria-required></textarea>
                        </div>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                        <input type="text" name="_gotcha" style={{display: 'none'}} required aria-required/>
                    </fieldset>
                    <div className={submitButton}>
                        <input type="submit" value="Send" />
                        <p className={spamWarning}>* When submitting, you may be asked to complete a captcha to help us reduce spam. Thanks!</p>
                    </div>
                </form>
            </div>
        </Animation>
    );
}
