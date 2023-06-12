import axios from "axios";

const Enrolled = () => {
  axios
    .get("http://localhost:5000/payments")
    .then((data) => console.log(data.data));

  return (
    <div>
      <h2>This is Enrolled Page</h2>
    </div>
  );
};

export default Enrolled;
