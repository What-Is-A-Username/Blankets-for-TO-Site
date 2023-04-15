import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'

import { ShoppingCart } from 'react-feather'
import StoreItemPreview from '../components/store/store-item-preview'
import Cookies from 'js-cookie'
import HeaderImage from '../components/header-image'
import StyledButton from '../components/styled-button'
import { sum } from 'lodash'

import * as styles from '../page-styles/store.module.css'

export default class Store extends React.Component {

    state = { cartItems: []}

    componentDidMount()
    {
        // var isServer = typeof window === undefined;
        // var cookies = isServer ? new Cookies(req.headers.cookie) : new Cookies(); 
        // this.setState({cartItems: cookies.get('cart-items')});
        if (typeof window !== 'undefined') {
            this.setState({cartItems: JSON.parse(Cookies.get('cart-items'))});
        }
    }

	render() {

        const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = 'Purchases go towards funding donations for the homeless community.'
        const headerTitle = 'Merchandise Store'
        
		const storeItems = get(this, 'props.data.allContentfulMerchItem.nodes')
        var itemsInCart = Array.isArray(this.state.cartItems) && this.state.cartItems.length > 0; 
		
		return (
			<Layout location={this.props.location}>
				<SEO 
                    title='Browse merchandise for Blankets for T.O.'
                    description='Browse Blankets for T.O. merchandise including masks and stickers. Purchases go towards funding donations and events.'
                    doNotCrawl
                />
				<div className="white-background">
                    {
                        (!itemsInCart) ? 
                        <HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
                        :
                        null
                    }

                    <div className={styles.cartDisplay}>
                        <div className={styles.cartDisplayInfo}>
                            <ShoppingCart size={64}/>
                            <p>{itemsInCart ? `There are ${sum(this.state.cartItems.map(x => x.count))} items in your shopping cart.`:`Browse items below and add them to your cart for checkout.`}</p>
                        </div>
                        {
                            itemsInCart ?
                            <StyledButton buttonText='View shopping cart' link='/cart' openInNewTab={false}/>
                            :
                            null
                        }
                        
                    </div> 

                    <div className={styles.catalogue}>
                        <h3 className={styles.catalogueTitle}>Our Catalogue</h3>
                        <div className={styles.catalogueContainer}>
                            {storeItems.map(item =>
                                {
                                    return(<StoreItemPreview storeitem={item} key={item.itemName}/>)
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
    query StoreQuery {
        allContentfulMerchItem(filter: {itemName: {ne: "Placeholder"}}) {
            nodes {
                slug
                mainPreview {
                    description
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                    )
                }
                largePreview {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                    )
                }
                itemName
                itemPrice
                itemDescription 
                {
                    raw
                }
            }
        }
        file(relativePath: { eq: "shopping-bag.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                )
            }
        }
        allContentfulHeaderImage(filter: {pageName: {eq: "Store"}}, limit: 1) {
            nodes {
				image {
					gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                    )
				}
			}
		}
    }
`  