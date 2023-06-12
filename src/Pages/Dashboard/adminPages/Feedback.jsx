import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const singleClass = useLoaderData();
  console.log(singleClass);

  const handleSendFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const sendFeedback = { feedback };
    console.log(sendFeedback);

    fetch(
      `https://champions-sports-camp-server.vercel.app/classes/${singleClass._id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(sendFeedback),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `Feedback sent to ${singleClass.instructorName}`,
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
    <form onSubmit={handleSendFeedback}>
      <h2 className="text-5xl font-display text-center">
        Send a feedback to{" "}
        <span className="text-amber-800">{singleClass.instructorName}</span>{" "}
        <br /> about this class
      </h2>
      <div className="text-center mt-10">
        <input
          type="text"
          placeholder="Write Feedback"
          name="feedback"
          className="textarea text-2xl textarea-bordered w-[700px] h-[200px] "
        ></input>{" "}
      </div>
      <div className="flex justify-between mt-5">
        <Link to="/dashboard/manageClasses">
          {" "}
          <button className="btn bg-amber-800  text-white">Go Back</button>
        </Link>
        <button className="btn bg-amber-800  text-white">Send</button>
      </div>
    </form>
  );
};

export default Feedback;
