import React from 'react';

import './checkout-item.styles.scss';

// https://www.w3schools.com/charsets/ref_utf_dingbats.asp

const CheckoutItem = ({cartItem : {name, price, quantity, imageUrl}}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={imageUrl}/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
