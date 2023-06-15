import React from "react";
import pdf from "../../assets/SeviciasUm.pdf";
import something from "../../assets/something.jpg";
import Button from "@mui/material/Button";
import "./downloadBook.css";
import PaymentComponent from "../paymentComponent/PaymentComponent";

const DownloadBook = (props) => {
  return (
    <div className="downloadBook">
      <img className="img" src={something} alt="" /* width={250} height={250} */ />
      <Button>
        <a href={pdf} className= "linked">E-book gratuito</a>
      </Button>
      <PaymentComponent />
      {/* this is the payment button component, used for stripe checkout
      
      */}
    </div>
  );
};

export default DownloadBook;
