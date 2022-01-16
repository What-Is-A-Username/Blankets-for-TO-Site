import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import StyledButton from '../styled-button'
import Fade from 'react-reveal/Fade'
import styles from './actions.module.css'

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

    const photos = props.allFile.edges.map(edge => edge.node.childImageSharp);

    return(
        <div className={styles.parentContainer}>
            {
                actionInfo.map((action, idx) =>
                    {
                        var sketchFluid = photos.find(photo => photo.fluid.originalName === action.sketch)
                        var photoFluid = photos.find(photo => photo.fluid.originalName === action.photo)

                        return(
                            idx % 2 === 1 ? 
                            // 1st and 3rd = picture right of text
                            <div className={styles.actionContainer}>
                                <Fade left>
                                    <div className={styles.infoTextRight}>
                                        <div className={styles.sketch}>
                                            <Img fluid={sketchFluid.fluid}
                                                style={{maxWidth: "100%", maxHeight: "100%"}}
                                                imgStyle={{ objectFit: "contain"}}/>
                                        </div>
                                        <h1>{action.title}</h1>
                                        <p>{action.description}</p>
                                    </div> 
                                </Fade>
                                <Fade right>
                                    <div className={styles.photo}>
                                        <Img fluid={photoFluid.fluid}
                                        imgStyle={{ objectFit: "contain", borderRadius: "15px"}}/>
                                    </div> 
                                </Fade>
                            </div> 
                            : 
                            <div className={styles.actionContainer}>
                                <Fade left>
                                    <div className={styles.photo}>
                                        <Img fluid={photoFluid.fluid}
                                        imgStyle={{ objectFit: "contain", borderRadius: "15px"}}/>
                                    </div> 
                                </Fade>
                                <Fade right>
                                    <div className={styles.infoTextLeft}>
                                        <div className={styles.sketch}>
                                            <Img fluid={sketchFluid.fluid}
                                                style={{maxWidth: "100%", maxHeight: "100%"}}
                                                imgStyle={{objectFit: "contain" }}/>
                                        </div>
                                        <h1>{action.title}</h1>
                                        <p>{action.description}</p>
                                    </div> 
                                </Fade>
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
                        allFile(filter: {relativePath: {regex: "/people/"}, childImageSharp: {fluid: {}}}) {
                            edges {
                              node {
                                id
                                
                                childImageSharp {
                                  fluid(quality: 100) {
                                    originalName
                                    ...GatsbyImageSharpFluid
                                    ...GatsbyImageSharpFluidLimitPresentationSize
                                  }
                                }
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