import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

import BackArrow from '../components/back-arrow'
import HeaderImage from '../components/header-image'
import SpotifyEmbed from '../components/blog_embeds/spotify-embed'
import YoutubeEmbed from '../components/blog_embeds/youtube-embed'

import * as styles from '../page-styles/podcasts.module.css'

class PodcastCollaborations extends React.Component {
	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = 'View podcasts featuring guest appearances of some of our members.'
        const headerTitle = 'Podcast Collaborations'

        const podcasts = get(this, 'props.data.allContentfulPodcastCollaboration.nodes')
        
        const all_references = [].concat.apply([], podcasts.map(x => x.richDescription.references))
        const assets = new Map(all_references.map(ref => [ref.contentful_id,ref]))
		const options = {
			renderNode: {
                [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                    const data = assets.get(node.data.target.sys.id)
                    if (data.internal.type === 'ContentfulSpotifyEmbed') {
						return(<SpotifyEmbed data={data}/>)
					} else if (data.internal.type === 'ContentfulYoutubeEmbed') {
                        return <YoutubeEmbed data={data}/>
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
                                                {x.richDescription.raw !== undefined ? documentToReactComponents(JSON.parse(x.richDescription.raw), options) : <p>Error: Articles not found.</p>}
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
					gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                    )
				}
			}
		}
        allContentfulPodcastCollaboration {
            nodes {
                episodeName
                richDescription {
                    raw
                    references {
                      ... on ContentfulSpotifyEmbed {
                        id
                        contentful_id
                        internal {
                          type
                        }
                        link
                        accessibilityDescription
                      }
                      ... on ContentfulYoutubeEmbed {
                        id
                        contentful_id
                        internal {
                          type
                        }
                        watchKey
                        accessibilityDescription
                      }
                    }
                  }
                  publishDate
            }
        }
	}
`

