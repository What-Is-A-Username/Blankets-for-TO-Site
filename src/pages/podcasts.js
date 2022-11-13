import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import HeaderImage from '../components/header-image'
import PodcastCard from '../components/podcasts/podcast-card'
import SquareGrid from '../components/layouts/square-grid'

import * as styles from '../page-styles/podcasts.module.css'

class Podcasts extends React.Component {
	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = 'Listen to the Beyond the Blankets podcast, the official podcast from Blankets for T.O.'
        const headerTitle = 'Beyond the Blankets'
        const podcasts = get(this, 'props.data.allContentfulPodcast.nodes')

        const collaborationContent = [
            {
                title: "Browse podcast collaborations",
                link: "/podcast-collaborations",
                description: "View podcasts featuring guest appearances of some of our members.",
                gatsbyImageData: imgFluid
            },
        ]

		return (
			<Layout location={this.props.location}>
				<SEO title='Listen to the Beyond the Blankets podcast'
					description='Browse and listen to episodes of Beyond the Blankets, the official Blankets for T.O. podcast.'/>
				<div className="white-background">
                    <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<h1 className={styles.title}>Beyond the Blankets: The Official Podcast by Blankets for T.O.</h1>
                        {podcasts.map((x, index) => <PodcastCard key={index} podcast={x}/>)}
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
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
        allContentfulPodcast(sort: {order: ASC, fields: episodeNumber}, filter: {podcastSeries: {eq: "Beyond the Blankets"}}) {
            nodes {
                slug
                episodeName
				episodeNumber
                richDescription {
                    raw
                }
                publishDate(formatString: "MMMM Do, YYYY")
                spotifyEpisode {
                    link
                }
            }
        }
	}
`

