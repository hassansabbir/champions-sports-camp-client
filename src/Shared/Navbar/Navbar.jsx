import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logoW from "../../assets/logoB.png";
import useBookmark from "../../hooks/useBookmark";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [bookmark] = useBookmark();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="text-xl font-semibold">
        <Link>Home</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link>Instructors</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to="/classes">Classes</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to="/dashboard">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {bookmark?.length || 0}
            </span>
            Dashboard
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 max-w-7xl bg-opacity-80 rounded shadow-lg bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-20 rounded-full" src={logoW} alt="" />
        <a className="btn btn-ghost font-display hidden md:block text-3xl normal-case">
          Champions Sports Camp
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-5">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          {user && (
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
        </div>
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
