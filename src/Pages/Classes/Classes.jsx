import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useBookmark from "../../hooks/useBookmark";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [, refetch] = useBookmark();
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://champions-sports-camp-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);

  const approvedClasses = classes.filter((cls) => cls.status === "approved");

  const handleAddToBookmarks = (singleClass) => {
    console.log(singleClass);
    if (user && user.email) {
      const bookmarkedItem = {
        classId: singleClass._id,
        name: singleClass.name,
        image: singleClass.image,
        instructorName: singleClass.instructorName,
        price: singleClass.price,
        email: user.email,
      };
      fetch("https://champions-sports-camp-server.vercel.app/bookmarks", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookmarkedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added to your Bookmarks.",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You need to login for purchasing classes.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="pt-28">
      <Helmet>
        <title>Classes || Champions Sports Camp</title>
      </Helmet>
      <h2 className="text-5xl font-display text-center">
        All of Our Classes is here in one page. <br /> Enroll now!!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-20 gap-10">
        {approvedClasses.map((singleClass) => (
          <div
            key={singleClass._id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-96 h-60"
                src={singleClass?.image}
                alt={singleClass.name}
              />
            </figure>
            <div className="card-body text-lg font-bold">
              <h2 className="card-title text-3xl font-bold">
                {singleClass.name}
              </h2>
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
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAddToBookmarks(singleClass)}
                  className="btn bg-amber-800 text-white"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
