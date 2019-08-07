import Home from "pages/Home";

import Login from "pages/Login";
import Register from "pages/Register";

import Dashboard from "pages/Dashboard";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/user/login",
    component: Login
  },
  {
    path: "/user/register",
    component: Register
  },
  {
    path: "/dashboard",
    component: Dashboard
  }
];
