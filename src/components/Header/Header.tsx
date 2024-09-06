import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Auth/Firebase/firebaseConfig";

export const Header = () => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const placement = "left";
  const navigate = useNavigate();

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

    localStorage.removeItem("user");
    checkUserAuthentication();
    setOpen(false);
    navigate("/");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label:
        user?.name != "" ? (
          <Link to={"/my-notes"}>View Notes</Link>
        ) : (
          <Link to={"/"}>Home</Link>
        ),
    },
    {
      key: "2",
      label:
        user?.name != "" ? (
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
    {
      key: "3",
      label: <Link to={"/signup"}>Sign Up</Link>,
    },
  ];

  const checkUserAuthentication = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      const unsubscribe = onAuthStateChanged(auth, (result) => {
        if (result) {
          const { email, displayName } = result;
          setUser({
            _id: "",
            name: displayName ?? "",
            email: email ?? "",
          });
        } else {
          setUser({
            _id: "",
            name: "",
            email: "",
          });
        }
      });

      unsubscribe();
    }
  };

  useEffect(() => {
    checkUserAuthentication();
  }, []);

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
          Welcome{" - "}
          <span className="text-yellow-500 uppercase font-bold italic">
            {" "}
            {user?.name != "" ? user.name : "User"}
          </span>
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
          <div className="my-8 font-bold">
            Welcome{" "}
            <span className="text-yellow-500 font-semibold uppercase">
              {" "}
              {user?.name != "" ? user.name : "User"}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            {user?.name != "" ? (
              <div className="flex flex-col justify-center items-start gap-4">
                <a
                  onClick={handleLogout}
                  className="hover:cursor-pointer text-red-500"
                >
                  Logout
                </a>
                <Link to={"/my-notes"}>View Notes</Link>
              </div>
            ) : (
              <Link to={"/login"} onClick={() => setOpen(false)}>
                Login
              </Link>
            )}
            <Link to={"/signup"} onClick={() => setOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};
