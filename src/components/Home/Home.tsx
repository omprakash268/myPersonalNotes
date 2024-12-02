/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from "react";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import bgImg from "../../assets/images/bg-img.jpg";
import "./Home.css";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../redux/slice/userSlice";

const Timer = lazy(() => import("./LiveTimer/LiveTimer"));

export const Home = () => {
  const userData: any = useSelector(getUserDetails);

  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

  const backgroundImageStyle = { backgroundImage: `url(${bgImg})` };

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col justify-start items-center font-bold bg-gradient-to-r from-indigo-500 from-20% via-sky-600 via-100%"
        style={{ ...divStyle, ...backgroundImageStyle }}
      >
        <Header />
        <div className="mt-36"></div>
        {!userData ? (
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
              <span className="text-orange-500">
                {userData && userData?.name}
              </span>
            </p>
            <Link
              to={"/my-notes"}
              className="text-sm text-white hover:text-blue-500 hover:outline-blue-500 outline-2 outline-dotted outline-green-500 py-3 px-6 rounded-lg"
            >
              View My Notes
            </Link>
          </div>
        )}

        <Suspense fallback={<span className="text-white">Loading Timer...</span>}>
          <Timer />
        </Suspense>
      </div>
    </>
  );
};
