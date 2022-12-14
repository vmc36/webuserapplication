import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage/index";
import Login from "./screens/Login/index";
import SignUp from "./screens/SignUp/index";
import UserPage from "./screens/UserPage/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/userpage",
    element: <UserPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
