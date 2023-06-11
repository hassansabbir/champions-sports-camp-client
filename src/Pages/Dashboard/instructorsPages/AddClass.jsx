import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddCard = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const totalStudent = parseFloat(form.totalStudent.value);
    const availableSeats = parseFloat(form.availableSeats.value);
    const price = parseFloat(form.price.value);
    const newClass = {
      name,
      image,
      instructorName,
      instructorEmail,
      totalStudent,
      availableSeats,
      price,
      status: "pending",
    };
    console.log(newClass);

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Class Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="w-full">
      <h2 className="text-5xl text-center font-display">Add New Classes</h2>
      <form onSubmit={handleAddCard} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="class name"
            required
            className="input  input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="photoUrl"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            name="instructorName"
            placeholder="instructor name"
            defaultValue={user?.displayName}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="text"
            name="instructorEmail"
            placeholder="instructor email"
            defaultValue={user.email}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Total Student</span>
          </label>
          <input
            type="text"
            name="totalStudent"
            placeholder="total students"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="text"
            name="availableSeats"
            placeholder="available seats"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
