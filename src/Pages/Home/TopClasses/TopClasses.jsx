import axios from "axios";
import { useEffect, useState } from "react";

const TopClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("https://champions-sports-camp-server.vercel.app/classes")
      .then((data) => {
        setClasses(data.data.filter((dt) => dt.status === "approved"));
      });
  }, []);

  return (
    <div className="my-32">
      <h2 className="text-5xl font-display my-20 text-center font-semibold">
        Top Classes by Students
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-20 gap-5">
        {classes.slice(0, 6).map((singleClass) => (
          <div
            key={singleClass._id}
            className="card card-compact w-96 bg-base-100 hover:shadow-2xl shadow-xl"
          >
            <figure>
              <img
                className="w-96 h-72"
                src={singleClass.image}
                alt={singleClass.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">
                {singleClass.name}
              </h2>
              <div className="text-xl font-bold">
                <h2>
                  <span className=" text-amber-800">Instructor Name:</span>{" "}
                  {singleClass.instructorName}
                </h2>
                <h2>
                  <span className=" text-amber-800">Total Students:</span>{" "}
                  {singleClass.totalStudent}
                </h2>
                <h2>
                  <span className=" text-amber-800">Available Seats:</span>{" "}
                  {singleClass.availableSeats}
                </h2>
                <h2>
                  <span className=" text-amber-800">Price:</span> ${" "}
                  {singleClass.price}
                </h2>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
