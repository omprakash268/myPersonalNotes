/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/Firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, logout } from "../../redux/slice/userSlice";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const placement = "left";
  const navigate = useNavigate();
  const userData = useSelector(getUserDetails);

  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });

    dispatch(logout());
    setOpen(false);
    navigate("/");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: <Link to={"/"}>Home</Link>,
    },
    {
      key: "1",
      label: <Link to={"/resume"}>Resume</Link>,
    },
    userData && {
      key: "2",
      label: <Link to={"/my-notes"}>View Notes</Link>,
    },
    {
      key: "3",
      label:
        userData != undefined ? (
          <div
            onClick={handleLogout}
            className="hover:cursor-pointer text-red-500"
          >
            Logout
          </div>
        ) : (
          <Link to={"/login"}>Login</Link>
        ),
    },
    !userData && {
      key: "4",
      label: <Link to={"/signup"}>Sign Up</Link>,
    },
  ].filter(Boolean);

  return (
    <>
      <div className="w-full h-[5rem] header-transparent flex justify-between items-center px-4 sm:px-12 text-white">
        <div className="flex flex-col justify-center items-start">
          <Link
            to={"/"}
            className="font-extrabold text-3xl uppercase text-black"
          >
            My Notes
          </Link>
          <div className="text-[0.6rem] text-black">
            Created by : Om Prakash
          </div>
        </div>
        <div className="desktop-view">
          Welcome{" "}
          {userData ? (
            <span className="text-yellow-500 uppercase font-bold italic">
              {userData && userData?.name}
            </span>
          ) : (
            <span className="text-sky-500">Guest</span>
          )}
        </div>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <FaUserCircle className="desktop-view text-3xl cursor-pointer" />
        </Dropdown>
        <IoMenu
          className="mobile-view text-2xl hover:cursor-pointer"
          onClick={showDrawer}
        />
      </div>
      <Drawer
        title="MY NOTES"
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
        className=""
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-col justify-center items-start">
            <Link
              to={"/"}
              onClick={() => setOpen(false)}
              className="font-extrabold text-3xl uppercase text-black"
            >
              My Notes
            </Link>
            <div className="text-[0.6rem] text-black">
              Created by : Om Prakash
            </div>
          </div>
          <div className="mt-8 mb-4 font-bold">
            Welcome{" "}
            {userData ? (
              <span className="text-yellow-500 uppercase font-bold italic">
                {userData && userData?.name}
              </span>
            ) : (
              <span className="text-sky-500">Guest</span>
            )}
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            {userData ? (
              <div className="flex flex-col justify-center items-start gap-4">
                <Link to={"/"} onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link to={"/my-notes"} onClick={() => setOpen(false)}>
                  View Notes
                </Link>
                <a
                  onClick={handleLogout}
                  className="hover:cursor-pointer text-red-500"
                >
                  Logout
                </a>
              </div>
            ) : (
              <>
                <Link to={"/login"} onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link to={"/signup"} onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};
