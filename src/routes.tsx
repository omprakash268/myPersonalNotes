import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Auth/Login/Login";
import { SignUp } from "./components/Auth/SignUp/SignUp";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Note } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/my-notes",
    Component: Note,
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default router;
