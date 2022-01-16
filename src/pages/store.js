import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from '../page-styles/store.module.css'
import StoreItemPreview from '../components/store/store-item-preview'
import { ShoppingCart } from 'react-feather'
import Cookies from 'universal-cookie'
import StyledButton from '../components/styled-button'
import { sum } from 'lodash'

export default class Store extends React.Component {

    state = { cartItems: []}

    componentDidMount()
    {
        var isServer = typeof window === undefined;
        var cookies = isServer ? new Cookies(req.headers.cookie) : new Cookies(); 
        this.setState({cartItems: cookies.get('cart-items')});
    }

	render() {
        
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
					<div className='wrapper'>
                        <h2>Store</h2>
                    </div>
                    {
                        (!itemsInCart) ? 
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
    query StoreQuery {
        allContentfulMerchItem(filter: {itemName: {ne: "Placeholder"}}) {
            nodes {
                slug
                mainPreview {
                    fluid(maxWidth: 400, maxHeight: 400, resizingBehavior: SCALE) {
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