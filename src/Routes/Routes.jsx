import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import Bookmark from "../Pages/Dashboard/Bookmark/Bookmark";
import Enrolled from "../Pages/Dashboard/Enrolled/Enrolled";
import ManageUsers from "../Pages/Dashboard/adminPages/ManageUsers";
import ManageClasses from "../Pages/Dashboard/adminPages/ManageClasses";
import AddClass from "../Pages/Dashboard/instructorsPages/AddClass";
import PrivetRoute from "./PrivetRoute";
import MyClasses from "../Pages/Dashboard/instructorsPages/MyClasses";
import Feedback from "../Pages/Dashboard/adminPages/Feedback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "classes/:id",
        element: <Feedback></Feedback>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleClasses/${params.id}`),
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "bookmark",
        element: <Bookmark></Bookmark>,
      },
      {
        path: "enrolled",
        element: <Enrolled></Enrolled>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
