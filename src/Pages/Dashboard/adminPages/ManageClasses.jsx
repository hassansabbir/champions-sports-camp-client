import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);
  return (
    <div className="w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class Photo & Name</th>
            <th>Instructor Name & Email</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={cls._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cls.image} alt={cls.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cls.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {cls.instructorName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {cls.instructorEmail}
                </span>
              </td>
              <td>$ {cls.price}</td>
              <td className="text-center">{cls.availableSeats}</td>
              <td>
                <button className="btn btn-sm w-20 bg-green-400">
                  Approve
                </button>{" "}
                <br />
                <button className="btn btn-sm w-20 bg-red-400">Denied</button>
              </td>
              <td>
                <button className="btn ">
                  <FaEdit className="w-5 h-5" />
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
