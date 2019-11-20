import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    // pk_test_7vNj1BPvAqUZVRCW6fGZC2nB00s3r8Oo7h

    const onToken = token => {
        axios({
                url: "payment",
                method: "post",
                data: {
                    amount: priceForStripe,
                    token
                }
            }).then(response => {
                alert('Payment successful');
            })
            .catch(error => {
                console.log(error);
                // console.log('Payment error ', JSON.parse(error));
                alert('There was an issue with your payment. Make sure you use the provided credit cart.');
            });

        // console.log(token);
        // alert("Payment successful");
    };

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_7vNj1BPvAqUZVRCW6fGZC2nB00s3r8Oo7h";

    return ( <
        StripeCheckout label = "Pay Now"
        Name = "CRWN Clothing Ltd."
        billingAddress shippingAddress image = "https://svgshare.com/i/CUz.svg"
        description = { `Your price value is $${price}` }
        amount = { priceForStripe }
        panelLabel = "Pay Now"
        token = { onToken }
        stripeKey = { publishableKey }
        />
    );
};

export default StripeCheckoutButton;