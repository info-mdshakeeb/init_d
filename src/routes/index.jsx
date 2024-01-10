import App from "../App";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import GlobalLoader from "../components/share/loading/GlobalLoader";

const Home = lazy(() => import("../page/Home.jsx"));
const Login = lazy(() => import("../page/Auth/Login"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element:
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><GlobalLoader />  </div>}><PrivateRoute><App /> </PrivateRoute> </Suspense>,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },

    ],
  },
  {
    path: "/login",
    element: (<Suspense><PublicRoute><Login /></PublicRoute> </Suspense>),
  },

]);
