import { useState } from "react";
import StripeContainer from "../stripeContainer/StripeContainer";
import Button from "@mui/material/Button";
import "./paymentComponent.css";
import logo from "../../assets/logo.jpg";

export default function PaymentComponent() {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    setIsLoading(true);
    const stripe = await StripeContainer();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MiJzVLOQeY3ZFmclCscTFNU",
          quantity: 1,
        },
      ],
      mode: "payment",
            successUrl: `http://www.seviciasvicosas.com.br/success`, 
    

      /* successUrl: `http://localhost:3000/success`,  */
      cancelUrl: `http://www.seviciasvicosas.com.br/`,

      /*  successUrl: `http://153.92.223.148/success`,
      cancelUrl: `http://153.92.223.148/cancel`, */

      /* customerEmail: "customer@email.com", */
    });
    if (error) {
      setStripeError(error.message);
    }
    setIsLoading(false);
    /*     console.warn(error.message);
     */
    if (stripeError) {
      alert(stripeError);
    }
  }

  return (
    <>
      <div className="payment">
        {/*         <img src="" alt="livro" />
         */}{" "}
        <Button
          className="button1"
          onClick={handleCheckout}
          variant="contained"
          color="success"
          disabled={isLoading}
          size="large"
        >
          {isLoading ? "Carregando..." : "Livro completo"}
        </Button>
      </div>
    </>
  );
}
