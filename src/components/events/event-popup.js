import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import { background, blocker, modalContent, modalPadding, modal, closeButton, modalLayout, image } from './event-popup.module.css'
import { articleLink, textContent, title, description, subtitle, datetime, location } from './event-popup.module.css'
import { X } from "react-feather";

class EventPopup extends React.Component {

    render() {

        const {eventData, onClose} = this.props;
  
        eventData.articles = eventData.articles.map(article => {
            const { sys: { contentType: { sys: { id: entryType }} } } = article
            if (entryType === 'blogPost') {
                return {...article, type: article.articleType, fullSlug: `/blog/${article.slug}` }
            } else if (entryType === 'page') {
                return {...article, type: 'Page', fullSlug: `/pages/${article.slug}`}
            } else {
                return {...article, type: 'Link', fullSlug: `/${slug}`}
            }

        })

        return(
            <div className={background}>
                <div className={blocker} onClick={onClose} ref={this.popupBlocker}/>
                <div ref={this.modalRef} className={modal}>
                    <div className={modalPadding}>
                        <div className={modalContent}>
                            <h1 className={title}>{eventData.eventName}</h1>
                            <div className={modalLayout}>
                                <div className={image}>
                                    <GatsbyImage alt={eventData.smallPreviewImage.description} image={eventData.smallPreviewImage.gatsbyImageData}/>
                                </div>
                                <div className={textContent}>
                                    <div className={description} dangerouslySetInnerHTML={{
                                        __html: eventData.description.childMarkdownRemark.html,
                                    }}/>
                                    <strong className={subtitle}>When is it?</strong>
                                    <p className={datetime}>
                                        {
                                            eventData.eventDate !== `Date and time to be announced` ? 
                                            `${eventData.eventDate} to ${eventData.endDate}` :
                                            `Date and time to be announced.`
                                        }
                                    </p>
                                    <strong className={subtitle}>Where is it?</strong>
                                    <div className={location} dangerouslySetInnerHTML={{
                                        __html: eventData.location.childMarkdownRemark.html,
                                    }}/>
                                    <strong className={subtitle}>Read more</strong>
                                    {
                                        eventData.articles.map((article) => {
                                            return(
                                                <div key={article.fullSlug}>
                                                    <span>({article.type}) <a className={articleLink} href={article.fullSlug}>{article.title}</a></span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <X className={closeButton} onClick={onClose} size={40}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPopup