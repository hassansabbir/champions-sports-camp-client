import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button className="btn text-xl btn-outline w-10/12 rounded-3xl btn-info">
          <FcGoogle className="h-7 w-7" /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
