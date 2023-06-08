import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="text-xl font-semibold">
        <Link>Home</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link>Instructors</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link>Classes</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link>Dashboard</Link>
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
        <a className="btn btn-ghost font-display text-4xl normal-case">
          Champions Sports Camp
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-outline">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
