import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="w-full px-20">
      <Helmet>
        <title>Payment || Champions Sports Camp</title>
      </Helmet>
      <h2 className="text-5xl text-center font-display font-semibold">
        Pay Now
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm data={data} price={data.price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
