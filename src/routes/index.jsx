import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import GlobalLoader from "../components/share/loading/GlobalLoader";

const App = lazy(() => import("../App"));
const Home = lazy(() => import("../page/Home.jsx"));
const Login = lazy(() => import("../page/Auth/Login.jsx"));
const PublicRoute = lazy(() => import("./PublicRoute.jsx"));
const PrivateRoute = lazy(() => import("./PrivateRoute.jsx"));
const UserDashBoard = lazy(() => import("../page/UserDashboard"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element:
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><GlobalLoader />  </div>}><PrivateRoute><App /> </PrivateRoute> </Suspense>,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/user/user_management", element: <UserDashBoard /> },
    ],
  },
  {
    path: "/login",
    element: (<Suspense fallback={<div className="flex items-center justify-center h-screen"><GlobalLoader />  </div>} ><PublicRoute><Login /></PublicRoute> </Suspense>),
  },

]);
