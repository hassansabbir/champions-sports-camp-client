import { FaTrashAlt } from "react-icons/fa";
import useBookmark from "../../../hooks/useBookmark";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Bookmark = () => {
  const [bookmark, refetch] = useBookmark();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookmarks/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full text-center">
      <h2 className="text-5xl font-display my-10 font-bold">
        Bookmarked Classes
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Photo & Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Enroll Now</th>
              <th>Delete</th>
            </tr>
          </thead>
          {bookmark.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.instructorName}</td>
                <td>$ {item.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${item._id}`}>
                    {" "}
                    <button className="btn btn-sm">Pay Now</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-circle text-white bg-red-400"
                  >
                    <FaTrashAlt className="w-5 h-5" />
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

export default Bookmark;
