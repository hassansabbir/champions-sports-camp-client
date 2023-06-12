import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Instructors = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("https://champions-sports-camp-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllUsers(data);
      });
  }, []);
  console.log(allUsers);

  const instructors = allUsers.filter(
    (instructor) => instructor.role === "instructor"
  );

  return (
    <div className="pt-28">
      <Helmet>
        <title>Instructors || Champions Sports Camp</title>
      </Helmet>
      <h2 className="text-5xl font-display text-center my-10">
        Our Top Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-20 gap-5">
        {instructors.map((instructor) => (
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

export default Instructors;
