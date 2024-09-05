/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import bgImg from "../../assets/images/bg-img.jpg";
import "./Home.css";

export const Home = () => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
  });

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const divStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col justify-start items-center font-bold bg-gradient-to-r from-indigo-500 from-20% via-sky-600 via-100%"
        style={divStyle}
      >
        <Header />
        <div className="mt-36"></div>
        {user?.name == "" ? (
          <div className="text-white">
            {" "}
            <Link
              to={"/login"}
              className="text-orange-500 hover:underline hover:text-blue-500"
            >
              Login
            </Link>{" "}
            or{" "}
            <Link
              to={"/signup"}
              className="hover:underline hover:text-blue-500 text-orange-500"
            >
              Create New Account
            </Link>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-xl font-bold ">
              <span className="text-yellow-500">Hi , </span>{" "}
              <span className="text-orange-500">{user.name}</span>
            </p>
            <Link
              to={"/my-notes"}
              className="text-sm text-white hover:text-blue-500 hover:outline-blue-500 outline-2 outline-dotted outline-green-500 py-3 px-6 rounded-lg"
            >
              View My Notes
            </Link>
          </div>
        )}

        <div className="mt-4 w-[auto] timer-transparent p-4 flex justify-center items-center text-[5rem]  time-gradiant">
          {formatTime(time)}
        </div>
      </div>
    </>
  );
};
