import { toNumber } from 'lodash'
import React from 'react'
import { MinusSquare, PlusSquare } from 'react-feather'
import * as styles from './cart-item.module.css'

class CartItem extends React.Component 
{
    render() 
    {
        return(
            <div className={styles.parentContainer}>
                <div className={styles.name}>
                    <a href={`/store/${this.props.cartItem.slug}`} >{this.props.cartItem.itemName}</a>
                </div>
                <p className={styles.price}>${this.props.cartItem.isMember ? this.props.cartItem.memberItemPrice.toFixed(2) : this.props.cartItem.itemPrice.toFixed(2)}</p>
                <div className={styles.count}>
                    {this.props.canChange && 
                    <MinusSquare className={styles.countIcons} onClick={() => this.props.minusQuantity(this.props.cartItem)}/> }
                    <p>{toNumber(this.props.cartItem.count.toFixed())}</p>
                    {this.props.canChange && 
                    <PlusSquare className={styles.countIcons} onClick={() => this.props.plusQuantity(this.props.cartItem)}/> }
                </div>
                <p className={styles.total}>${this.props.cartItem.total.toFixed(2)}</p>
            </div>
        )
    }
}

export default CartItem

