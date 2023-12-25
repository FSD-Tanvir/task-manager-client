import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/login/SignUp";
import Dashboard from "../Pages/dashboard/Dashboard";
import ManageTask from "../Pages/dashboard/manageTask";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/about/About";
import Contact from "../Pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/task-board",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "/task-board",
        element: <ManageTask />,
      },
    ],
  },
]);

export default router;
