import axios from "axios";
import { useEffect, useState } from "react";

const Enrolled = () => {
  const [myEnrolled, setMyEnrolled] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/payments")
      .then((data) => setMyEnrolled(data.data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-display font-semibold text-center">
        My Enrolled Classes
      </h2>
      <div className="grid grid-cols-1 my-20 md:grid-cols-2 gap-5">
        {myEnrolled.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-72 h-60 mt-10"
                src={item.image}
                alt={item.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">
                {item.enrolledClassName}
              </h2>
              <p>
                {" "}
                <span className="text-xl font-bold">Instructor: </span>
                {item.instructorName}
              </p>
              <p>
                {" "}
                <span className="text-xl font-bold">Price: </span>${item.price}
              </p>
              <p>
                {" "}
                <span className="text-xl font-bold">Status: </span>
                <button className="btn btn-sm bg-green-700 text-white">
                  {item.status}
                </button>
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-800 text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrolled;
