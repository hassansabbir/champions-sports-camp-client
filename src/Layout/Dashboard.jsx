import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
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
          {isAdmin.admin && (
            <>
              <li>
                <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
              </li>
            </>
          )}
          {isInstructor.instructor && (
            <>
              <li>
                <NavLink to="/dashboard/addClass">Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">My Classes</NavLink>
              </li>
            </>
          )}
          {isStudent.student && (
            <>
              <li>
                <NavLink to="/dashboard/bookmark">Bookmark</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled">Enrolled</NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/">Home</NavLink>
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
