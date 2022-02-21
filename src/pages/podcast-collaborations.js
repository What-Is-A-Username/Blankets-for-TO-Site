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

class PodcastCollaborations extends React.Component {
	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.fluid')
        const headerSubtitle = 'View podcasts featuring guest appearances of some of our members.'
        const headerTitle = 'Podcast Collaborations'

        const podcasts = get(this, 'props.data.allContentfulPodcast.nodes')
        
		const options = {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
					<img src={fields.file['en-US'].url}
						style={{
							maxHeight: 300,
							width: fields.file['en-US'].details.image.width * (300 / fields.file['en-US'].details.image.height),
						}}
						alt={fields.description}
					/>,
                [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                    if (node.data.target.sys.contentType.sys.id === "inlineSpotifyEmbed") {
                        var frameSrc = node.data.target.fields.link['en-US'].replace('episode', 'embed-podcast/episode').split('?')[0]; 
                        return (
                            <div className={styles.iframeParent}>
                                <iframe src={frameSrc} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        );
                    }
                    else if (node.data.target.sys.contentType.sys.id === "youtubeEmbed") {
                        var frameSrc = node.data.target.fields.watchKey['en-US'] 
                        return (
                            <div className={styles.iframeParent}>
                                <iframe src={`https://www.youtube.com/embed/${frameSrc}`} width="560" height="315" frameborder="0"></iframe>
                            </div>
                        );
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
        allContentfulPodcast(filter: {podcastSeries: {ne: "Beyond the Blankets"}}) {
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

