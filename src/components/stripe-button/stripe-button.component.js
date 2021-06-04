import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IyaV9CPfeu2anXXpVI3YcQOKci0CWp3jVrOa6cHZ8nOEiiF6JDkfN8N7l21Oo3mFkEUVKnYSKdqlvtyRtm9W6ak00wA4HdC22";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Peter Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
