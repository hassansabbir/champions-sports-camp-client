import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

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
                  <button className="btn bg-amber-800 text-white btn-sm">
                    Make Admin
                  </button>
                </td>
                <td>
                  <button className="btn bg-amber-800 text-white btn-sm">
                    Make Instructor
                  </button>
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
