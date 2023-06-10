import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  console.log(isAdmin, isInstructor, isStudent);

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
          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/manageUsers">Manage Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageClasses">Manage Classes</Link>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <Link to="/dashboard/addClass">Add Class</Link>
              </li>
              <li>
                <Link to="/dashboard/myClasses">My Classes</Link>
              </li>
            </>
          )}
          {isStudent && (
            <>
              <li>
                <Link to="/dashboard/bookmark">Bookmark</Link>
              </li>
              <li>
                <Link to="/dashboard/enrolled">Enrolled</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <div className="divider"></div> 
          <li>
            <Link to="/classes">
              <LuLayoutList /> All Classes
            </Link>
          </li> */}
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
