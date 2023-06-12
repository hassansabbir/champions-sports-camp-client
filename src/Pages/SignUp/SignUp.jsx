import { Link, useNavigate } from "react-router-dom";
import signUpPageImage from "../../assets/signUp.jpg";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const savedUserInfo = {
            name: data.name,
            image: data.photoUrl,
            email: data.email,
            role: "student",
          };
          fetch("https://champions-sports-camp-server.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(savedUserInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log("user profile updated");
                reset();
                Swal.fire({
                  title: "User created successfully. Please login now.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                logOut()
                  .then(() => {
                    navigate("/login");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up || Champions Sports Camp</title>
      </Helmet>
      <h1 className="text-6xl pt-36 text-center mx-auto font-display w-9/12">
        Welcome to our <br /> Sports Academies Summer Camp <br />
      </h1>
      <h1 className="text-6xl mt-10 font-display text-center">SignUp Now</h1>
      <div className="hero ">
        <div className="hero-content flex-col-reverse lg:flex-row my-24 ">
          <img className="w-5/12" src={signUpPageImage} alt="LoginImg" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photoUrl", { required: true })}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-600">PhotoUrl is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be under 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase one lowercase one number
                    and one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    password must be one of the following
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral border-none rounded-3xl  text-white bg-amber-700">
                  Sign Up
                </button>
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-center my-10 text-xl">
              Already Have an Account?{" "}
              <Link to="/login" className="underline font-bold">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
