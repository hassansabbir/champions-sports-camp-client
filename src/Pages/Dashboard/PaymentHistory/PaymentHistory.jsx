import axios from "axios";
import { useState } from "react";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [allPayment, setAllPayment] = useState([]);
  axios
    .get("https://champions-sports-camp-server.vercel.app/payments")
    .then((data) => setAllPayment(data.data));

  return (
    <div className="w-full">
      <Helmet>
        <title>Payment History || Champions Sports Camp</title>
      </Helmet>
      <h2 className="text-5xl text-center font-semibold font-display">
        Payment History
      </h2>
      <div className="my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Transaction Id</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {allPayment.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.enrolledClassName}</td>
                <td>{payment.instructorName}</td>
                <td>{payment.transactionId}</td>
                <td className="btn  bg-green-300 ">{payment.status}</td>
                <td>{moment(payment.date).format("LLL")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
