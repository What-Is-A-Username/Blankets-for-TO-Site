import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'
import styles from '../page-styles/store.module.css'
import StoreItemPreview from '../components/merch/store-item-preview'

export default class Store extends React.Component {

	render() {
		const storeItems = get(this, 'props.data.allContentfulMerchItem.nodes')
		
		return (
			<Layout location={this.props.location}>
				<SEO title='Store' doNotCrawl/>
				<div className="white-background">
					<div className="wrapper">
						<div>
							<Fade left duration={400}>
								<h2>Store</h2>
							</Fade>
						</div>
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
        allContentfulMerchItem {
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
    }
`  