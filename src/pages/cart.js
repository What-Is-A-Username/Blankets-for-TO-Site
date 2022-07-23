import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import * as styles from '../page-styles/cart.module.css'
import Cookies from 'js-cookie';
import CartItem from '../components/store/cart-item'
import * as buttonStyles from '../components/styled-button.module.css'
import { ArrowLeft, ArrowRight, Copy, DollarSign, Info } from 'react-feather'
import BackArrow from '../components/back-arrow'
import Animation from '../components/animate/animation'

export default class Cart extends React.Component {

    allItems = get(this.props, 'data.allContentfulMerchItem.nodes')
    state = { step: 0, refresh: false, isMember: false, copied: false, cartItems: [] }

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
        var newCart = newCartItems.map(item => {return({slug: item.slug, count: item.count})})
        Cookies.set('cart-items', JSON.stringify(newCart), {path: '/'})
    }

    next = () => {
        this.setState({step: this.state.step + 1})
    }

    previous = () => {
        this.setState({step: Math.max(this.state.step - 1, 0)})
    }

    checkoutProcessStep = (children, step) => {
        return(
            <div className={styles.checkoutStep}>
                {
                    this.state.step === step ? 
                        <Animation fade>
                            <h1>Step {step}</h1>
                            {children}
                        </Animation>
                    :
                        <React.Fragment>
                            <h1>Step {step}</h1>
                            {children}
                        </React.Fragment>
                }
                
            </div>
        )
    }

    generateList = (total) => {
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
        // var isServer = typeof window === undefined;
        // var cookies = isServer ? new Cookies(req.headers.cookie) : new Cookies();
        // var cartData = cookies.get('cart-items')
        var cartData = JSON.parse(Cookies.get('cart-items'))
        this.setState({cartItems: cartData})
    }

    render() {
        const formLink = 'https://forms.gle/6pMnKaWJMQKRrwY77'
        const interacLink = 'https://www.interac.ca/en/consumers/products/interac-e-transfer/'

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
						<h2>Your Shopping Cart</h2>
                            
                            <div style={{visibility: itemsInCart ? 'visible' : 'hidden', height: itemsInCart ? 'auto' : 0}}>
                                <BackArrow text='Continue shopping' link='/store'/>
                                <div className={styles.header}>
                                    <p className={styles.name}>Item</p>
                                    <p className={styles.price}>Price</p>
                                    <div className={styles.countHeader}>
                                        <p>Quantity</p>
                                    </div>
                                    <p className={styles.total}>Total</p>
                                </div>
                                <div className={styles.cartList}>
                                    {
                                        newCartItems.length > 0 ?
                                             newCartItems.map(x => {
                                            return(
                                                <CartItem 
                                                cartItem={x} 
                                                plusQuantity={(data) => this.plusQuantity(data)}
                                                minusQuantity={(data) => this.minusQuantity(data)}
                                                canChange={this.state.step === 0}
                                                />
                                            )
                                        })
                                        : 
                                        null
                                    }
                                    </div>
                                    <div className={styles.totalBar}>
                                    <div className={styles.totalTitle}>
                                        <p>Grand Total</p>
                                    </div>
                                    <p className={styles.totalNumber}>${grandTotal.toFixed(2)}</p>
                                </div>
                                <div style={{margin: '5vh 0'}}>
                                    <div className={styles.memberDiscountInfo}>
                                        <Info className={styles.infoIcon}/>
                                        <p>Are you a member of Blankets for T.O.? Members are eligible for a discount on applicable items. <a href='/positions'>More info here.</a></p>
                                    </div>
                                    <div className={styles.memberDiscountBox}>
                                        <input type="checkbox" id="membership" name="membership" value="Membership" onChange={() => this.changeMembershipStatus()}/>
                                        <label for="membership"> I am a member of Blankets for T.O.</label>
                                    </div>
                                </div>
                                {
                                    this.state.step === 0 && itemsInCart ? 
                                    <div className={styles.proceedToCheckout}>
                                        <p>Confirm your cart items before proceeding to checkout.</p>
                                        <div className={buttonStyles.primaryButton} onClick={this.next}>
                                            <DollarSign style={{margin: '0 5px'}}/>
                                            Proceed to Checkout
                                        </div>
                                    </div>
                                    :
                                    null 
                                }
                                {
                                    this.state.step >= 1 ?
                                    this.checkoutProcessStep(
                                        <React.Fragment>
                                            <p>Confirm your cart items before proceeding to checkout.</p>
                                            <div>
                                                <p>{this.generateList(this.state.cartItems, grandTotal)}</p>
                                            </div>
                                        </React.Fragment>, 1) 
                                    :
                                    null
                                }
                                {
                                    this.state.step >= 2 ?
                                    this.checkoutProcessStep(
                                        <React.Fragment>
                                            <p>In order to finish sending your order, you will need to complete a Google form. Read below for more information.</p>

                                            <p>When prompted by the form to copy your order details, copy your order by pressing below.</p>
                                            <div className={buttonStyles.primaryButton} onClick={() => this.copyOrderList(grandTotal)}>
                                                <Copy style={{margin: '0 5px'}}/>
                                                {this.state.copied ? 'Order copied to clipboard!' : 'Copy order details'}
                                            </div>
                                            
                                            <p>To complete the form, you will have to pay the order via Interact e-transfer. Learn more about e-transfer and payment security here: </p>
                                            <a href={interacLink}>{interacLink}</a>

                                            <p>The link to the form is found below:</p>
                                            <a href={formLink} target='_blank' rel='noopener noreferrer'>{formLink}</a>
                                        </React.Fragment>
                                        , 2) 
                                    :
                                    null
                                }
                                {
                                    this.state.step === 3 ?
                                    this.checkoutProcessStep(
                                        <React.Fragment>
                                            <p>Have you submitted the form? If so, your order is now being processed! Thank you for your contribution to Blankets for T.O.!</p>
                                            <p>To stay updated on the status of your order, please look out for emails from blanketsforto @ gmail.com. Send us an email to inquire about your order status and order pickup arrangements.</p>
                                        </React.Fragment>
                                        , 3) : null
                                }
                                <div className={styles.buttonRow} >
                                    {this.state.step >= 1 && this.state.step <= 2 ?
                                    <div className={buttonStyles.primaryButton} onClick={this.previous}>
                                        <ArrowLeft style={{margin: '0 5px'}}/>
                                        Previous
                                    </div> : null }
                                    {this.state.step >= 1 && this.state.step <= 2 ?
                                    <div className={buttonStyles.primaryButton} onClick={this.next}>
                                        Next
                                        <ArrowRight style={{margin: '0 5px'}}/>
                                    </div> : null }
                                </div>
                            </div>
                            <div className={styles.emptyCart} style={{visibility: itemsInCart ? 'hidden' : 'visible'}}>
                                <p>There are no items in your shopping cart.</p>
                                <BackArrow text='Go back to the store page' link='/store'/>
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