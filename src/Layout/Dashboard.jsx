import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {
  FaBookmark,
  FaCheckCircle,
  FaUsers,
  FaHistory,
  FaHome,
  FaListOl,
} from "react-icons/fa";
import { HiFolderAdd, HiViewList } from "react-icons/hi";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isStudent, isStudentLoading] = useStudent();
  if (isAdminLoading || isInstructorLoading || isStudentLoading) {
    return (
      <div className="text-center mt-72">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );
  }

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
          <li>
            <img
              className="rounded-full w-96 h-56"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </li>
          <li className="my-14">
            <h2 className="mx-auto">{user?.displayName}</h2>
            <p className="text-lg mx-auto underline">{user?.email}</p>
          </li>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <div className="divider"></div>
          {isAdmin.admin && (
            <>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <FaListOl /> Manage Classes
                </NavLink>
              </li>
            </>
          )}
          {isInstructor.instructor && (
            <>
              <li>
                <NavLink to="/dashboard/addClass">
                  <HiFolderAdd /> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">
                  <HiViewList /> My Classes
                </NavLink>
              </li>
            </>
          )}
          {isStudent.student && (
            <>
              <li>
                <NavLink to="/dashboard/bookmark">
                  <FaBookmark /> Bookmark
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled">
                  <FaCheckCircle /> Enrolled
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaHistory /> Payment History
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
