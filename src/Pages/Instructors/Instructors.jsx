import { useEffect, useState } from "react";

const Instructors = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
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
              <p className="text-2xl">{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
