import { toNumber } from 'lodash'
import React from 'react'
import { MinusSquare, PlusSquare } from 'react-feather'
import { parentContainer, name, price, count, countIcons, total } from './cart-item.module.css'

class CartItem extends React.Component 
{
    render() 
    {
        const { cartItem, minusQuantity, plusQuantity } = this.props;

        return(
            <div className={parentContainer}>
                <div className={name}>
                    <a href={`/store/${cartItem.slug}`} >{cartItem.itemName}</a>
                </div>
                <p className={price}>${cartItem.isMember ? cartItem.memberItemPrice.toFixed(2) : cartItem.itemPrice.toFixed(2)}</p>
                <div className={count}>
                    <MinusSquare className={countIcons} onClick={() => minusQuantity(cartItem)}/> 
                    <p>{toNumber(cartItem.count.toFixed())}</p>
                    <PlusSquare className={countIcons} onClick={() => plusQuantity(cartItem)}/> 
                </div>
                <p className={total}>${cartItem.total.toFixed(2)}</p>
            </div>
        )
    }
}

export default CartItem

