import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="w-full px-20">
      <h2>Payment is here.</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm data={data} price={data.price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
