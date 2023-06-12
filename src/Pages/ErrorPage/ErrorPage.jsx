import { Link } from "react-router-dom";
import errorPage from "../../assets/errorPage.png";

const ErrorPage = () => {
  return (
    <div className="text-center my-10">
      <img className="mx-auto" src={errorPage} alt="" />
      <h2 className="text-5xl my-10 font-display">What are you looking?</h2>
      <p className="text-4xl w-10/12 mx-auto font-display my-5">
        The page you are trying to find is not found. Check your internet
        connection and URL and try again.
      </p>
      <Link to="/">
        {" "}
        <button className="btn btn-outline btn-md px-10 bg-amber-800 text-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
