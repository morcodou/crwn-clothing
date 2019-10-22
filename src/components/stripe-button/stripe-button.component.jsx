import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // pk_test_7vNj1BPvAqUZVRCW6fGZC2nB00s3r8Oo7h

  const onToken = (token ) => {
      console.log(token);
      alert('Payment successful');
  }

  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_7vNj1BPvAqUZVRCW6fGZC2nB00s3r8Oo7h';

  return (
      <StripeCheckout 
          label='Pay Now'
          Name ='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your price value is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
  )
};


export default StripeCheckoutButton;