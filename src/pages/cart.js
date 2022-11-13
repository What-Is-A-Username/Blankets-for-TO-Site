import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import BackArrow from '../components/back-arrow'
import Cookies from 'js-cookie';
import CartItem from '../components/store/cart-item'
import { Copy, ExternalLink, Info } from 'react-feather'
import StyledButton from '../components/styled-button'
import * as buttonStyles from '../components/styled-button.module.css'
import * as styles from '../page-styles/cart.module.css'

export default class Cart extends React.Component {

    allItems = get(this.props, 'data.allContentfulMerchItem.nodes')
    state = { refresh: false, isMember: false, copied: false, cartItems: [] }

    changeMembershipStatus = () => 
    {
        this.setState({isMember: !this.state.isMember})
    }
    
    plusQuantity = (itemData) => {
        var newCartItems = this.state.cartItems
        var selected = newCartItems.find(item => item.slug === itemData.slug)
        if (selected !== undefined)
        {
            selected.count += 1
            this.updateCookies(newCartItems)
            this.setState({cartItems: newCartItems})
        }
    }

    minusQuantity = (itemData) => {
        var newCartItems = this.state.cartItems
        var selected = newCartItems.find(item => item.slug === itemData.slug)
        if (selected !== undefined)
        {
            selected.count -= 1
            newCartItems = newCartItems.filter(x => x.count > 0)
            this.updateCookies(newCartItems)
            this.setState({cartItems: newCartItems})
        }
    }

    updateCookies = (newCartItems) => 
    {
        if (typeof window !== 'undefined') {
            var newCart = newCartItems.map(item => {return({slug: item.slug, count: item.count})})
            Cookies.set('cart-items', JSON.stringify(newCart), {path: '/'})
        }
    }

    generateList = () => {
        var items = this.state.cartItems.length > 0 ? this.state.cartItems.map(
            data =>
            {
                var matchingItem = this.allItems.find(item => item.slug === data.slug)
                return(
                    {
                        isMember: this.state.isMember,
                        count: data.count,
                        total: (this.state.isMember ? matchingItem.memberItemPrice : matchingItem.itemPrice) * data.count,
                        ...matchingItem
                    }
                ) 
            }
        ).filter(data => data.count !== 0) : []
        var grandTotal = items.length > 0 ? items.map(item => item.total).reduce((cost1, cost2) => cost1 + cost2, 0) : 0

        var result = ['ORDER DETAILS:']
        result = result.concat(items.map(x => {
            return(
                `Item Name: ${x.itemName} Price: $${x.itemPrice.toFixed(2)} Quantity: ${x.count} Total: $${x.total.toFixed(2)}`
            )
        }))
        result = result.concat(['GRAND TOTAL: $' + grandTotal.toFixed(2)])
        return result.join('\r\n')
    }

    copyOrderList = (total) => {
        if (typeof window !== "undefined" && document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = this.generateList(total);
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            }
            catch (ex) {
                return prompt("Copy to clipboard: Ctrl+C, Enter");
            }
            finally {
                document.body.removeChild(textarea);
                
                this.setState({copied: true}, () => setTimeout(() => this.setState({copied: false}), 2000))
            }
        }
    }

    componentDidMount()
    {
        if (typeof window !== 'undefined') {
            var cartData = JSON.parse(Cookies.get('cart-items'))
            this.setState({cartItems: cartData})
        } else {
            this.setState({cartItems: []})
        }
    }

    render() {
        const formLink = 'https://forms.gle/6pMnKaWJMQKRrwY77'

        var itemsInCart = this.state.cartItems.length > 0; 
        var newCartItems = this.state.cartItems.length > 0 ? this.state.cartItems.map(
            data =>
            {
                var matchingItem = this.allItems.find(item => item.slug === data.slug)
                return(
                    {
                        isMember: this.state.isMember,
                        count: data.count,
                        total: (this.state.isMember ? matchingItem.memberItemPrice : matchingItem.itemPrice) * data.count,
                        ...matchingItem
                    }
                ) 
            }
        ).filter(data => data.count !== 0) : []
        var grandTotal = newCartItems.length > 0 ? newCartItems.map(item => item.total).reduce((cost1, cost2) => cost1 + cost2, 0) : 0

        return(
            <Layout location={this.props.location}>
                <SEO 
                    title='Your Cart'
                    description='Browse items in your shopping cart.'
                    doNotCrawl
                    />

				<div className="white-background">
					<div className="wrapper">
                        <BackArrow text={itemsInCart ? 'Continue browsing' : 'Browse items'} link='/store'/>
                        <div className={styles.layout}>
                            {
                                !itemsInCart &&
                                <div className={styles.emptyCart}>
                                    <p>There are no items in your shopping cart.</p>
                                </div>
                            }

                            <div className={itemsInCart ? styles.cartFull : styles.cartEmpty}>
                                <h2 className={styles.layoutHeader}>Order Cart</h2>
                                <div className={styles.header}>
                                    <p className={styles.name}>Item</p>
                                    <p className={styles.price}>Price</p>
                                    <div className={styles.countHeader}>
                                        <p className={styles.count}>Quantity</p>
                                    </div>
                                    <p className={styles.total}>Total</p>
                                </div>
                                <div className={styles.cartList}>
                                    {
                                        newCartItems.length > 0 &&
                                            newCartItems.map(x => {
                                            return(
                                                <CartItem 
                                                    cartItem={x} 
                                                    plusQuantity={(data) => this.plusQuantity(data)}
                                                    minusQuantity={(data) => this.minusQuantity(data)}
                                                    key={x.slug}
                                                />
                                            )
                                        })
                                    }
                                    </div>
                                    <div className={styles.totalBar}>
                                    <div className={styles.totalTitle}>
                                        <p>Grand Total</p>
                                    </div>
                                    <p className={styles.totalNumber}>${grandTotal.toFixed(2)}</p>
                                </div>
                            </div >
                            {
                                itemsInCart && 
                                <div className={styles.checkoutPane}>
                                    <h2 className={styles.layoutHeader}>Checkout</h2>
                                    <div className={styles.memberDiscountInfo}>
                                        <Info className={styles.infoIcon}/>
                                        <a href='/positions'>Are you a member of Blankets for T.O.?</a>
                                    </div>
                                    <div className={styles.memberDiscountBox}>
                                        <input type="checkbox" id="membership" name="membership" value="Membership" onChange={() => this.changeMembershipStatus()}/>
                                        <label htmlFor="membership">Yes, claim member discount</label>
                                    </div>
                                    <div className={styles.checkoutText}>
                                        <span>Step 1: Check</span>
                                        <p>Look over and double-check your order cart.</p>
                                        <span>Step 2: Send</span>
                                        <p>To send your order, copy your order details and use it to fill out our Google Form</p>
                                        <div className={buttonStyles.primaryButton + ' ' + styles.copyOrderDetails} onClick={() => this.copyOrderList(grandTotal)}>
                                            {this.state.copied ? 'Order copied to clipboard!' : 'Copy order details'}
                                            <Copy style={{margin: '0 5px'}}/>
                                        </div>
                                        <StyledButton openInNewTab link={formLink} buttonText=''>
                                            Go to Google Form
                                            <ExternalLink style={{margin: '0 5px'}}/>
                                        </StyledButton>
                                        <span>Step 3: Done!</span>
                                        <p>If the form has been submitted, your order is now being processed. Thanks for your support!</p>
                                        <p>To stay updated on the status of your order, please look out for emails from us. You will receive an email about your order status and pickup arrangements.</p>
                                    </div>
                                </div>
                            }
                        </div>
					</div>
				</div>    
            </Layout>
        )
    }
}

export const CartQuery = graphql`
    query CartQuery {
        allContentfulMerchItem(filter: {itemName: {ne: "Placeholder"}}) {
            nodes {
                slug
                itemName
                itemPrice
                memberItemPrice
            }
        }
    }
`