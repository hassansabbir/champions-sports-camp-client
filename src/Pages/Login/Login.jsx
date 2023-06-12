import { Link, useLocation, useNavigate } from "react-router-dom";
import loginPageImage from "../../assets/login.jpg";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Login || Champions Sports Camp</title>
      </Helmet>
      <h1 className="text-6xl pt-36 text-center mx-auto font-display w-9/12">
        Welcome to our <br /> Sports Academies Summer Camp <br />
      </h1>
      <h1 className="text-6xl mt-10 font-display text-center">Login Now</h1>
      <div className="hero ">
        <div className="hero-content flex-col-reverse lg:flex-row my-24 ">
          <img className="w-5/12" src={loginPageImage} alt="LoginImg" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="text-red-600">email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral border-none rounded-3xl text-xl text-white bg-amber-700">
                  Login
                </button>
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-center my-10 text-xl">
              New to our Website?{" "}
              <Link to="/signUp" className="underline font-bold">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
