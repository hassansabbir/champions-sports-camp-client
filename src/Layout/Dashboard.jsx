import { Link, Outlet } from "react-router-dom";
import { FaBookmark, FaHome } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { LuLayoutList } from "react-icons/lu";
import { HiBadgeCheck } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full pt-20 bg-base-200 text-2xl font-semibold">
          <div className="divider"></div>
          <li>
            <Link to="/dashboard/manageUsers">Manage Users</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/dashboard/profile">
              <RxAvatar /> User Profile
            </Link>
          </li>

          <li>
            <Link to="/dashboard/bookmark">
              <FaBookmark /> Bookmark
            </Link>
          </li>
          <li>
            <Link to="/dashboard/enrolled">
              <HiBadgeCheck /> Enrolled
            </Link>
          </li>
          <div className="divider mb-2"></div>
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/classes">
              <LuLayoutList /> All Classes
            </Link>
          </li>
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
