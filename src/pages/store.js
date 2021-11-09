import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'
import styles from '../page-styles/store.module.css'
import StoreItemPreview from '../components/merch/store-item-preview'

export default class Store extends React.Component {

	render() {
		const storeItems = get(this, 'props.data.allContentfulMerchItem.nodes')
		
		return (
			<Layout location={this.props.location}>
				<SEO 
                    title='Shop merchandise for Blankets for T.O.'
                    description='Browse Blankets for T.O. merchandise including masks and stickers. Purchases go towards funding donations and events.'
                    doNotCrawl
                />
				<div className="white-background">
					<div className='wrapper'>
                        <h2>Store</h2>
                    </div>
                    <div className='wideWrapper'>
                        <div className={styles.headerLayout}>
                            <div className={styles.headerImage}>
                                <Img fluid={this.props.data.file.childImageSharp.fluid}/>
                            </div>
                            <div className={styles.headerText}>
                                <h3 className={styles.subtitle}>Every purchase helps alleviate homelessness</h3>
                                <p className={styles.description}>Every mask or sticker purchased goes towards funding blankets and other necessities that will be donated to homeless individuals, as we work to alleviate homelessness in the GTA.</p>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <h3 className={styles.catalogueTitle}>Our Catalogue</h3>
                        <div className={styles.catalogue}>
                            {storeItems.map(item =>
                                {
                                    return(<StoreItemPreview storeitem={item}/>)
                                }
                            )}
                        </div>
					</div>
				</div>
			</Layout>
		)
	}
}

export const StoreQuery = graphql`
    query MyQuery {
        allContentfulMerchItem(filter: {itemName: {ne: "Placeholder"}}) {
            nodes {
                slug
                mainPreview {
                    fluid(maxWidth: 500, maxHeight: 500, resizingBehavior: SCALE) {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
                largePreview {
                    fluid(maxHeight: 1200, maxWidth: 630, resizingBehavior: SCALE) {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
                itemName
                itemPrice
                itemDescription 
                {
                    json
                }
            }
        }
        file(relativePath: { eq: "shopping-bag.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
    }
`  