import Home from "pages/Home";
import Login from "pages/Login";

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
    path: "/dashboard",
    component: Dashboard
  }
];
