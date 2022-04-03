import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../page-styles/podcasts.module.css'
import { BLOCKS } from '@contentful/rich-text-types';
import HeaderImage from '../components/header-image'
import BackArrow from '../components/back-arrow'
import SpotifyEmbed from '../components/blog_embeds/spotify-embed'
import YoutubeEmbed from '../components/blog_embeds/youtube-embed'

class PodcastCollaborations extends React.Component {
	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.fluid')
        const headerSubtitle = 'View podcasts featuring guest appearances of some of our members.'
        const headerTitle = 'Podcast Collaborations'

        const podcasts = get(this, 'props.data.allContentfulPodcastCollaboration.nodes')
        
		const options = {
			renderNode: {
                [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                    if (node.data.target.sys.contentType.sys.id === "inlineSpotifyEmbed") {
                        return <SpotifyEmbed node={node}/>
                    }
                    else if (node.data.target.sys.contentType.sys.id === "youtubeEmbed") {
                        return <YoutubeEmbed node={node}/>
                    }
                }, 
			},
		};

		return (
			<Layout location={this.props.location}>
				<SEO title='Browse podcasts collaborations with us'
					description='View podcasts featuring guest appearances of some of our Blankets for T.O. members.'
                    doNotCrawl/>
				<div className="white-background">
                    <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
                        {
                            podcasts.map( x => 
                                {
                                    return(
                                        <React.Fragment>
                                            <h1 className={styles.podcastTitle}>{x.episodeName}</h1>
                                            <div className='richText'>
                                                {x.richDescription.json !== undefined ? documentToReactComponents(x.richDescription.json, options) : <p>Error: Articles not found.</p>}
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            )
                        }
                        <BackArrow text='Browse all podcasts' link='/podcasts'/>
					</div>
				</div> 
			</Layout>
		)
	}
}

export default PodcastCollaborations

export const podcastCollaborationsQuery = graphql`
	query PodcastCollaborationsQuery {
		allContentfulHeaderImage(filter: {pageName: {eq: "Podcasts"}}, limit: 1) {
            nodes {
				image {
					fluid(
						resizingBehavior: FILL
						quality: 100
					) {
						...GatsbyContentfulFluid_tracedSVG
					}
				}
			}
		}
        allContentfulPodcastCollaboration {
            nodes {
                episodeName
                richDescription {
                    json
                }
                publishDate
            }
        }
	}
`

