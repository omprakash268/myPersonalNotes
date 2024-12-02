import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LazyLoad } from "./utils/utils.tsx";
import { PageNotFound } from "./components/PageNotFound/PageNotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    element: LazyLoad(() => import("./components/Auth/Login/Login")),
  },
  {
    path: "/signup",
    element: LazyLoad(() => import("./components/Auth/SignUp/SignUp")),
  },
  {
    path: "/my-notes",
    element: LazyLoad(() => import("./components/Note/Note")),
  },
  {
    path: "/resume",
    element: LazyLoad(() => import("./components/Resume/Resume")),
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default router;
