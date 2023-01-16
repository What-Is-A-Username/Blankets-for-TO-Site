import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'
import Animation from '../animate/animation'
import { actionContainer, infoTextLeft, infoTextRight, sketch, photo } from './actions.module.css'

const actionsRender = (props) => {

    // Text for the join us and contact us widgets
    const actionInfo = [
        {
            title: 'Advocacy',
            description: 'Change requires a voice to be heard. We communicate homelessness issues to local leaders, to make sure that the needs and concerns of the homeless community are considered and addressed.',
            sketch: 'hugging-left.png',
            photo: 'care-packages.jpg',
        },
        {
            title: 'Engagement',
            description: 'Building a community of motivated and like-minded members allows for sustainable change. We organize events for the University of Toronto student community in order to get them involved with advocacy and donation initiatives.',
            sketch: 'hugging-right.png',
            photo: 'meeting.jpg',
        },
        {
            title: 'Donation',
            description: 'We work with local shelters to supply them with the essential supplies that they need. These items include hygiene products, masks and hand sanitizers, blankets, food, and much more.',
            sketch: 'supporting.png',
            photo: 'donation.jpg',
        },
        {
            title: 'Education',
            description: 'Tackling homelessness requires understanding its causes and consequences. We leverage social media posts, online blogging, academic research and in-person events to educate the public about homelessness in Canada.',
            sketch: 'raising.png',
            photo: 'blog.jpg',
        },
    ]

    const photos = props.allFile.edges.map(edge => edge.node);

    return (
        <div>
            {
                actionInfo.map((action, idx) => {
                    var sketchNode = photos.find(photo => `${photo.name}.${photo.extension}` === action.sketch)
                    var photoNode = photos.find(photo => `${photo.name}.${photo.extension}` === action.photo)

                    return (
                        idx % 2 === 1 ?
                            // 1st and 3rd = picture right of text
                            <div className={actionContainer} key={action.title}>
                                <div className={infoTextRight}>
                                    <Animation fade left>
                                        <div className={sketch}>
                                            <GatsbyImage image={sketchNode.childImageSharp.gatsbyImageData}
                                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                                                imgStyle={{ objectFit: "contain" }}
                                                alt={`Homepage sketch `} />
                                        </div>
                                        <h1>{action.title}</h1>
                                        <p>{action.description}</p>
                                    </Animation>
                                </div>
                                <div className={photo}>
                                    <Animation fade right>
                                        <GatsbyImage image={photoNode.childImageSharp.gatsbyImageData}
                                            imgStyle={{ objectFit: "contain", borderRadius: "15px" }}
                                            alt={`Homepage photo `} />
                                    </Animation>
                                </div>
                            </div>
                            :
                            <div className={actionContainer} key={action.title}>
                                <div className={photo}>
                                    <Animation fade left>
                                        <GatsbyImage image={photoNode.childImageSharp.gatsbyImageData}
                                            imgStyle={{ objectFit: "contain", borderRadius: "15px" }}
                                            alt={`Homepage photo `} />
                                    </Animation>
                                </div>
                                <div className={infoTextLeft}>
                                    <Animation fade right>
                                        <div className={sketch}>
                                            <GatsbyImage image={sketchNode.childImageSharp.gatsbyImageData}
                                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                                                imgStyle={{ objectFit: "contain" }}
                                                alt={`Homepage sketch `} />
                                        </div>
                                        <h1>{action.title}</h1>
                                        <p>{action.description}</p>
                                    </Animation>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export const Actions = () => {
    return (
        <StaticQuery
            query={
                graphql`
					query ActionsQuery {
                        allFile(filter: {relativePath: {regex: "/people/"}}) {
                            edges {
                              node {
                                id
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        placeholder: BLURRED
                                    )
                                }
                                name
                                extension
                              }
                            }
                          
                        }
					}
						`
            }
            render={data => actionsRender(data)}
        />
    )
};

export default Actions