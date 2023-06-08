import { Link } from "react-router-dom";
import signUpPageImage from "../../assets/signUp.jpg";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div>
      <h1 className="text-6xl pt-36 text-center mx-auto font-display w-9/12">
        Welcome to our <br /> Sports Academies Summer Camp <br />
      </h1>
      <h1 className="text-6xl mt-10 font-display text-center">SignUp Now</h1>
      <div className="hero ">
        <div className="hero-content flex-col-reverse lg:flex-row my-24 ">
          <img className="w-5/12" src={signUpPageImage} alt="LoginImg" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
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
