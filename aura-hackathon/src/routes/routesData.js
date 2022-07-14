import Home from "../pages/Home";
import Presales from "../pages/Presales";

export const routerPath = {
  home: "/home",
  default: "/",
};

export const publicRoutes = [
  {
    path: routerPath.home,
    component: Home,
    exact: true,
  },
  {
    path: routerPath.default,
    component: Home,
    exact: true,
  },
  {
    path: routerPath.presales,
    component: Presales,
    exact: true,
  }
];
