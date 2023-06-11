import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>Payment is here.</h2>
    </div>
  );
};

export default Payment;
