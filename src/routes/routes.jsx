import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Gallery from "../pages/Gallery";
import Settings from "../pages/Settings";
import Categories from "../pages/Categories";
import PrivateRoute from "./PrivateRoute";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout></Layout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
]);
