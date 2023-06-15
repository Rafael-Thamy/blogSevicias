import React from "react";

import { loadStripe } from "@stripe/stripe-js";

 const PUBLIC_KEY =
  "pk_test_51MZVGrLOQeY3ZFmcQtsG4qGbzxoIK2SHLfTx62oEqxe35ibTuqLkQqB4gFsG6DbzzrhynDICSWgSSEsjNwae2KcE00p6ZlXTmU"; 

let stripePromise;
const StripeContainer = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

export default StripeContainer;

//no momento da transiçao so trocar a chave pelo modo live, para aceitar cartao de credito
