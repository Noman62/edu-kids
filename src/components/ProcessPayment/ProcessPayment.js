import React from "react";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitForm from "../SplitForm/SplitForm";

const stripePromise = loadStripe(
  "pk_test_51IeAyzIv2ejY4IHnJkH4axnsp7m61KknEAYI2HSD9GzXwonsx57m8BHoniytLMDHIsLHtNdP6Dxc28mmF6A4MEmS00eQ14U1VX"
);
const ProcessPayment = () => {
  return (
    
      <Elements stripe={stripePromise}>
      <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
      </Elements>
    
  );
};

export default ProcessPayment;
