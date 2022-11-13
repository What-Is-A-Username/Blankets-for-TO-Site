import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import { GatsbyImage } from 'gatsby-plugin-image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer' 

import BackArrow from '../components/back-arrow'
import { XCircle, ShoppingBag, ChevronLeft, ChevronRight, ShoppingCart, PlusSquare, MinusSquare, Info, Plus, Check } from 'react-feather';
import Cookies from 'js-cookie'

import { layout, preview, carousel, leftArrow, rightArrow, image, thumbnailRow, selectedThumb, thumb, information, name, price, priceAmount, priceCurrency, memberPrice, description, inventory, icon_shoppingBag, icon_redx, addToCart, icon_minus, icon_plus, checkout, icon_shoppingCart, changeCart} from '../templates/store-item.module.css'

class StoreItemTemplate extends React.Component {

    item = get(this.props, 'data.contentfulMerchItem')
    state = { cartItems: [], currentImage: 0, numImages: this.item.images ? this.item.images.length : 0, 
        cartCount: 0}

    getCurrentItems = () => {
        var currentItem = this.state.cartItems.find(x => x.slug === this.item.slug) 
        return typeof currentItem !== undefined ? currentItem.count : 0
    }   

    onNext = () => {
        let nextItem = (this.state.currentImage + 1) % this.state.numImages
        this.setState({currentImage: nextItem})
    }

    onPrev = () => {
        let prevItem = (this.state.currentImage - 1)
        if (prevItem < 0) prevItem = this.state.numImages - 1
        this.setState({currentImage: prevItem})
    }

    selectImage = (index) => {
        this.setState({currentImage: index})
    }

    addToCart = () => 
    {
        if (typeof window === 'undefined') return;
        var existingItems = this.state.cartItems
        var existing = existingItems.find(x => x.slug === this.item.slug)
        if (existing === undefined)
        {
            existingItems.push({slug: this.item.slug, count: 1})
            Cookies.set('cart-items', JSON.stringify(existingItems), {path: '/'})
            this.setState({cartCount: 1, cartItems: existingItems})
        }
        else 
        {
            existing.count += 1
            Cookies.set('cart-items', JSON.stringify(existingItems), {path: '/'})
            this.setState({cartCount: existing.count, cartItems: existingItems})
        }
    }

    plusCart = () => 
    {
        if (typeof window === 'undefined') return;
        var existingItems = this.state.cartItems
        var existing = existingItems.find(x => x.slug === this.item.slug)
        if (existing !== undefined)
        {
            existing.count += 1
            Cookies.set('cart-items', JSON.stringify(existingItems), {path: '/'})
            this.setState({cartCount: existing.count, cartItems: existingItems})
        }
    }

    minusCart = () => 
    {
        if (typeof window === 'undefined') return;
        var existingItems = this.state.cartItems
        var existing = existingItems.find(x => x.slug === this.item.slug)
        if (existing !== undefined)
        {
            existing.count -= 1
            Cookies.set('cart-items', JSON.stringify(existingItems), {path: '/'})
            this.setState({cartCount: existing.count, cartItems: existingItems})
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            var existingItems = JSON.parse(Cookies.get('cart-items'))
            var entry = existingItems.find(x => x.slug === this.item.slug)
            this.setState({cartItems: existingItems, cartCount: entry === undefined ? 0 : entry.count})
        } else {
            this.setState({cartItems: [], cartCount: 0})
        }
    }

	render() {
        

        return(
            <Layout location={this.props.location}>
				<div className="white-background">
                    <SEO 
                        title={`Shop ${this.item.itemName}`}
                        description={`${this.item.itemName} ($${this.item.itemPrice.toFixed(2)}) - ${this.item.shortDescription}`}
                        cannonical='https://blanketsforto.ca/store'
                        metaImage={this.item.largePreview ? this.item.largePreview.file.url : undefined}
                        doNotCrawl
                    />
                    <div className="wrapper">
                        <div className={layout}>
                            <div className={preview}>
                                <div className={carousel}>
                                    {
                                        this.state.numImages > 1 &&
                                        <ChevronLeft className={leftArrow} onClick={() => this.onPrev()}/>
                                    }
                                    {
                                        this.state.numImages > 0 &&
                                        <div className={image}>
                                            <GatsbyImage image={this.item.images[this.state.currentImage].gatsbyImageData} alt={this.item.images[this.state.currentImage].description}/>
                                        </div>
                                    }
                                    
                                    {
                                        this.state.numImages > 1 &&
                                        <ChevronRight className={rightArrow} onClick={() => this.onNext()}/>
                                    }
                                </div>
                                <div className={thumbnailRow}>
                                    {
                                        this.item.thumbs &&
                                        this.item.thumbs.map((thumb, index) => {
                                            return(
                                                <div onClick={() => this.selectImage(index)} className={index === this.state.currentImage ? selectedThumb : thumb} key={index}>
                                                    <GatsbyImage image={thumb.gatsbyImageData} alt={thumb.description}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={information}>
                                <h1 className={name}>{this.item.itemName}</h1>
                                <div className={price}>
                                    <p className={priceAmount}>${this.item.itemPrice.toFixed(2)}</p>
                                    <p className={priceCurrency}>CAD</p>
                                </div>
                                {
                                    this.item.memberItemPrice < this.item.itemPrice &&
                                    <div className={memberPrice}>
                                        <Info/>
                                        <p>Members get a discounted price of ${this.item.memberItemPrice.toFixed(2)}</p>
                                    </div>
                                }
                                <div className={description}>
                                    {this.item.itemDescription != null ? documentToReactComponents(JSON.parse(this.item.itemDescription.raw), {renderNode:{}}) : null}
                                </div>
                                {
                                    this.item.isInStock ?
                                    <div className={inventory}>
                                        <ShoppingBag className={icon_shoppingBag}/>
                                        <p className={icon_shoppingBag}>Available in stock.</p>
                                    </div>:
                                    <div className={inventory}>
                                        <XCircle className={icon_redx}/>
                                        <p className={icon_redx}>This item is out of stock or no longer sold.</p>
                                    </div>
                                }
                                <div>
                                    {
                                        this.item.isInStock ?
                                            this.state.cartCount === 0 ?
                                            <div className={addToCart} onClick={this.addToCart}>
                                                <Plus className={icon_shoppingCart}/>
                                                <p>Add to cart</p>
                                            </div> :
                                            <div className={changeCart}>
                                                <Check className={icon_shoppingCart}/>
                                                <p>This item is in your cart. Quantity: </p>
                                                <MinusSquare className={icon_minus} onClick={this.minusCart}/>
                                                <p>{this.state.cartCount}</p>
                                                <PlusSquare className={icon_plus} onClick={this.plusCart}/>
                                            </div>
                                        :
                                        null
                                        
                                    }
                                    <a className={checkout} href='/cart'>
                                        <ShoppingCart className={icon_shoppingCart}/>
                                        <p>Start checkout</p>
                                    </a> 
                                </div>
                            </div>
                        </div>
                        <BackArrow text='Browse other items' link='/store'/>
                    </div>  
                </div>
            </Layout>
        )
    }


}

export default StoreItemTemplate

export const StoreItemQuery = graphql`
    query QueryMerchItemByName($slug: String!) {
        contentfulMerchItem(slug: {eq: $slug}) {
            slug
            images {
                description
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                )
            }
            thumbs : images {
                description
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                )
            }
            itemName
            itemPrice
            memberItemPrice
            shortDescription
            itemDescription {
                raw
            }
            isInStock
            largePreview {
                file {
					url
				}
            }
        }
    }
`