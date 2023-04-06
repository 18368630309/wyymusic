import { Navigate } from "react-router";
import Layout from "../layout/index";
import Home from "../views/home/index";
import Myself from "../views/myself/index";
// Navigate
const routes: any = [
  // {path: "/login", element: <LoginPage />, isHome: true},
  {
    path: "/",
    element: <Layout />,
    redirect: "/home",
    // 设置子路由
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/myself", element: <Myself /> },
    ],
  },
];
export default routes;
