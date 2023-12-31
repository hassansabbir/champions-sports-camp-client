import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://champions-sports-camp-server.vercel.app/classes/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [user?.email]);
  // console.log(myClasses);

  return (
    <div className="w-full">
      <Helmet>
        <title>My Classes || Champions Sports Camp</title>
      </Helmet>
      <h2 className="text-5xl text-center my-20 font-display">
        My Added Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Admin Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myClass, index) => (
              <tr key={myClass._id}>
                <th>{index + 1}</th>
                <td>{myClass.name}</td>
                <td className="text-center">{myClass.availableSeats}</td>
                <td>{myClass.price}</td>
                <td>{myClass.status}</td>
                <td>{myClass.feedback}</td>
                <td>
                  <button className="btn btn-circle">
                    <FaEdit className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
