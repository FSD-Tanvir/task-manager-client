import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/login/SignUp";

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
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
    ],
  },
  {path: "/login", element:<Login/>},
  {path: "/sign-up", element:<SignUp/>}
]);

export default router;
