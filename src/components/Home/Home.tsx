import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <>
      <div className="w-full min-h-screen bg-slate-800">
        <Header />
        <div className="w-full flex justify-center items-center min-h-[50vh] text-xl font-bold">
          {user?.name == "" ? (
            <div className="text-white">
              {" "}
              <Link
                to={"/login"}
                className="hover:underline hover:text-blue-500"
              >
                Login
              </Link>{" "}
               or{" "}
              <Link
                to={"/signup"}
                className="hover:underline hover:text-blue-500"
              >
                Create New Account
              </Link>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-xl font-bold text-orange-500">
                Welcome {user.name}
              </p>
              <Link
                to={"/my-notes"}
                className="text-sm text-white hover:text-blue-500"
              >
                View My Notes
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
