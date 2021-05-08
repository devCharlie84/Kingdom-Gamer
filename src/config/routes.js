//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin/AdminHome";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminEnlace from "../pages/Admin/Enlace";
import AdminBlog from "../pages/Admin/Blog";
import AdminPokemon from "../pages/Admin/Pokemon";

//Normal Pages
import BasicHome from "../pages/Basic/BasicHome";
import Blog from "../pages/Basic/Blog";
import Pokemon from "../pages/Basic/Pokemon";

//Other
import Error404Admin from "../pages/Admin/Error404";
import Error404Basic from "../pages/Basic/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/enlaces",
        component: AdminEnlace,
        exact: true,
      },
      {
        path: "/admin/blog",
        component: AdminBlog,
        exact: true,
      },
      {
        path: "/admin/pokemon",
        component: AdminPokemon,
        exact: true,
      },
      {
        component: Error404Admin,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: BasicHome,
        exact: true,
      },
      {
        path: "/blog",
        component: Blog,
        exact: true,
      },
      {
        path: "/blog/:url",
        component: Blog,
        exact: true,
      },
      {
        path: "/pokemon",
        component: Pokemon,
        exact: true,
      },
      {
        component: Error404Basic,
      },
    ],
  },
];

export default routes;
