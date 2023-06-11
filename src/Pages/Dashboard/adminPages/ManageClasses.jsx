import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });

  const handleApprove = (cls) => {
    fetch(`http://localhost:5000/classes/approve/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(cls.role);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${cls.name} is Approved.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleDenied = (cls) => {
    fetch(`http://localhost:5000/classes/denied/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${cls.name} is Denied.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

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
            <th>Set Status</th>
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
                <button
                  onClick={() => handleApprove(cls)}
                  disabled={cls.status === "approved" && "denied"}
                  className="btn btn-sm w-20 bg-green-400"
                >
                  Approve
                </button>
                <br />
                <button
                  onClick={() => handleDenied(cls)}
                  disabled={cls.status === "approved" && "denied"}
                  className="btn btn-sm w-20 bg-red-400"
                >
                  Denied
                </button>
              </td>
              <td>{cls.status}</td>
              <td>
                <Link to={`/dashboard/classes/${cls._id}`}>
                  <button className="btn ">
                    <FaEdit className="w-5 h-5" />
                  </button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
