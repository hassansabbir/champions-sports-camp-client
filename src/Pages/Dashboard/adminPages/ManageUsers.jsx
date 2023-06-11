import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is added as an Admin.`,
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

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is added as an Instructor.`,
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
  console.log("helloo world");

  return (
    <div className="w-full">
      <h2 className="text-5xl font-display text-center font-semibold">
        Manage All Users
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={user._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "ADMIN"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-amber-800 text-white btn-sm"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user?.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn bg-amber-800 text-white btn-sm"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
