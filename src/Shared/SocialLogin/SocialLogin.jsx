import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const loggedInUser = res.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn text-xl btn-outline w-10/12 rounded-3xl btn-info"
        >
          <FcGoogle className="h-7 w-7" /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
