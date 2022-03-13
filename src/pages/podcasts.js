import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../page-styles/podcasts.module.css'
import { BLOCKS } from '@contentful/rich-text-types';
import HeaderImage from '../components/header-image'
import SquareGrid from '../components/layouts/square-grid'
import SpotifyEmbed from '../components/blog_embeds/spotify-embed'
import YoutubeEmbed from '../components/blog_embeds/youtube-embed'

class Podcasts extends React.Component {
	render() {

		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.fluid')
        const headerSubtitle = 'Listen to the Beyond the Blankets podcast, the official podcast from Blankets for T.O.'
        const headerTitle = 'Beyond the Blankets'

        const podcasts = get(this, 'props.data.allContentfulPodcast.nodes')

        const collaborationContent = [
            {
                title: "Browse podcast collaborations",
                link: "/podcast-collaborations",
                description: "View podcasts featuring guest appearances of some of our members.",
                fluid: imgFluid
            },
        ]
        
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
                    if (node.data.target.sys.contentType.sys.id === "inlineSpotifyEmbed")
                        return <SpotifyEmbed node={node}/>
                    else if (node.data.target.sys.contentType.sys.id === "youtubeEmbed")
                        return <YoutubeEmbed node={node}/>
                }, 
			},
		};

		return (
			<Layout location={this.props.location}>
				<SEO title='Listen to the Beyond the Blankets podcast'
					description='Browse and listen to episodes of Beyond the Blankets, the official Blankets for T.O. podcast.'/>
				<div className="white-background">
                    <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
                        <h1 className={styles.title}>Beyond the Blankets will be published soon.</h1>
                        <p>Sorry, the first episode of Beyond the Blankets has not been published yet. Please check back later. Follow our social media feeds to get notified of when episodes are published. Thank you for your patience.</p>
                        {/* {
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
                        } */}
                        <h1 className={styles.title}>Other Podcasts</h1>
                        <SquareGrid content={collaborationContent}/>
					</div>
				</div> 
			</Layout>
		)
	}
}

export default Podcasts

export const podcastQuery = graphql`
	query PodcastQuery {
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
        allContentfulPodcast(filter: {podcastSeries: {eq: "Beyond the Blankets"}}) {
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

