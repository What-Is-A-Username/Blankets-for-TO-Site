import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import HeaderImage from '../components/header-image'
import EventPopup from '../components/events/event-popup'
import EventCard from '../components/events/event-card'
import { gridLayout } from '../page-styles/events.module.css'
import { keys } from 'lodash'

class Events extends React.Component {

    constructor(props) {
        super(props)
        this.dateTimeFormatter = Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        })
        this.dateFormatter = Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        this.timeFormatter = Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        })
        this.state = { popupActive: false, popupCategory: undefined, popupIndex: undefined}
        this.UPCOMING = 'upcoming'
        this.PAST = 'past'
    }
    
    onClickEvent = (popupCategory, popupIndex) => {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        this.setState({ popupActive: true, popupCategory, popupIndex })
    }

    onClosePopup = () => {
        this.setState({ popupActive: false })
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    }

    render() {
        const imgFluid = this.props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData
        const headerTitle = 'Events Calendar'
        // parse dates
        var events = this.props.data.allContentfulEvents.nodes;
        const now = Date.now()

        events = events.map(eventData => {
            
            const eventDate = new Date(eventData.eventDate)
            const endDate = new Date(eventData.endDate)

            if (!eventData.eventDate || !eventData.endDate) {
                return(
                    {
                        ...eventData,
                        eventDateVal: 0,
                        endDateVal: 0,
                        startDate: this.dateTimeFormatter.format(new Date(eventData.startDate)),
                        eventDate: 'Date and time to be announced',
                        endDate: 'Date and time to be announced',
                    }
                )
            } else if (eventDate.getMonth() != endDate.getMonth() || eventDate.getDate() != endDate.getDate()) {
                return(
                    {
                        ...eventData,
                        eventDateVal: new Date(eventData.eventDate),
                        endDateVal: new Date(eventData.endDate),
                        startDate: this.dateTimeFormatter.format(new Date(eventData.startDate)),
                        eventDate: this.dateFormatter.format(eventDate),
                        endDate: this.dateFormatter.format(endDate),
                    }
                )
            } else {
                return(
                    {
                        ...eventData,
                        eventDateVal: new Date(eventData.eventDate),
                        endDateVal: new Date(eventData.endDate),
                        startDate: this.dateTimeFormatter.format(new Date(eventData.startDate)),
                        eventDate: this.dateTimeFormatter.format(eventDate),
                        endDate: this.timeFormatter.format(endDate),
                    }
                )
            }
        })
       
        // filter dates relative to today's date and sort
        const upcomingEvents = events.filter(x => x.eventDateVal === 0 || x.endDateVal > now).sort((eventA, eventB) => {
            const a = eventA.eventDateVal
            const b = eventB.eventDateVal
            if (a === b) return 0
            else if (a === 0) return 1
            else if (b === 0) return -1
            else return a < b ? -1 : 1
        }) 
        const pastEvents = events.filter(x => x.eventDateVal !== 0 && x.endDateVal < now).sort((a, b) => b.eventDateVal - a.eventDateVal) // most recent first

        return (
            <Layout location={this.props.location}>
                <SEO title={headerTitle}
                    description='Browse upcoming and past events from Blankets for T.O.'>
                </SEO>
                <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} />
                {/* Show popup of additional information */}
                {
                    this.state.popupActive && this.state.popupCategory == this.UPCOMING &&
                    <EventPopup eventData={upcomingEvents[this.state.popupIndex]} onClose={() => this.onClosePopup()}/>
                }
                {
                    this.state.popupActive && this.state.popupCategory == this.PAST &&
                    <EventPopup eventData={pastEvents[this.state.popupIndex]} onClose={() => this.onClosePopup()}/>
                }
                <div className='wrapper'>
                    
                    <h2>Upcoming</h2>
                    <div className={gridLayout}>
                        {
                            upcomingEvents.map((eventData, index) => 
                                    <EventCard key={`Upcoming Event ${index}`} eventData={eventData} onClickEvent={() => this.onClickEvent(this.UPCOMING, index)}/>
                            )
                        }
                        {
                            upcomingEvents.length === 0 && 
                                <p>Unfortunately, there are no upcoming events scheduled soon. Check back soon, follow us or join our mailing list for event announcements.</p>
                        }
                    </div>
                <div>

                </div>
                {/* Past/recent events */}
                {
                    pastEvents.length > 0 &&
                    <div>
                        <h2>Recent</h2>
                        <div className={gridLayout}>
                        {
                            pastEvents.map((eventData, index) => 
                            <EventCard key={`Recent Event ${index}`} eventData={eventData} onClickEvent={() => this.onClickEvent(this.PAST, index)}/>
                            )
                        }
                        </div>
                    </div>
                }
                </div>
            </Layout>
            
        )
    }
}

export default Events

export const EventsQuery = graphql`
    query EventsPageQuery {
        allContentfulHeaderImage(filter: {pageName: {eq: "Events"}}, limit: 1) {
            nodes {
                image {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                    )
                }
            }
        }
        allContentfulEvents(filter: {siteVisible: {eq: true}}) {
            nodes {
                startDate(formatString: "YYYY-MM-DDTHH:mm:ss[Z]")
                endDate(formatString: "YYYY-MM-DDTHH:mm:ss[Z]")
                eventDate(formatString: "YYYY-MM-DDTHH:mm:ss[Z]")
                eventName
                articles {
                    ... on ContentfulPage {
                        slug
                        title
                        sys {
                            type
                            contentType {
                                sys {
                                    id
                                }
                            }
                        }
                    }
                    ... on ContentfulBlogPost {
                        slug
                        title
                        articleType
                        sys {
                            contentType {
                                sys {
                                    id
                                }
                            }
                        }
                    }
                }
                description {
                    childMarkdownRemark {
                        html
                    }
                }
                location {
                    childMarkdownRemark {
                        html
                    }
                }
                smallPreviewImage {
                    gatsbyImageData(
                        width: 400
                        layout: FULL_WIDTH
                        placeholder: BLURRED				
                    )
                    description
                }
            }
        }
    }
`