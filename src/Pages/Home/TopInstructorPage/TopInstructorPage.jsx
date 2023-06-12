import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TopInstructorPage = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((data) => {
      setInstructors(data.data.filter((dt) => dt.role === "instructor"));
    });
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center my-20 font-display font-bold">
        Out Top Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-96 h-60"
                src={instructor.image}
                alt={instructor.name}
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title mx-auto text-2xl font-bold">
                {instructor.name}
              </h2>
              <p className="text-xl">{instructor.email}</p>
              <div className="flex mx-auto my-5 gap-5">
                <button className="btn btn-circle">
                  <FaTwitter className="w-7 h-7" />
                </button>
                <button className="btn btn-circle">
                  <FaFacebookF className="w-7 h-7" />
                </button>
                <button className="btn btn-circle">
                  <FaInstagram className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructorPage;
