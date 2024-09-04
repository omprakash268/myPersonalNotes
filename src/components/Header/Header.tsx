import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

export const Header = () => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const placement = "left";

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    checkUserAuthentication();
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
          <div onClick={handleLogout} className="hover:cursor-pointer text-red-500">
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

  const navigate = useNavigate();

  const checkUserAuthentication = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser({
        _id: "",
        name: "",
        email: "",
      });
    }
  };

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  return (
    <>
      <div className="w-full h-[5rem] bg-gray-700 flex justify-between items-center px-14 text-white">
        <Link to={"/"} className="font-bold text-2xl uppercase text-blue-500">
          My Notes
        </Link>
        <div className="desktop-view">
          Welcome{" - "}
          <span className="text-orange-500 uppercase font-bold italic">
            {" "}
            {user?.name != "" ? user.name : "User"}
          </span>
        </div>
        {/* <div className="flex items-center justify-center gap-4 desktop-view">
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Sign Up</Link>
          {user?.name != "" ? (
            <div className="flex justify-center items-center gap-4">
              <div onClick={handleLogout} className="hover:cursor-pointer">
                Logout
              </div>
              <Link to={"/my-notes"}>View Notes</Link>
            </div>
          ) : (
            ""
          )}
        </div> */}

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
          <Link to={"/"} className="font-bold text-2xl uppercase text-blue-500">
            My Notes
          </Link>
          <div className="my-8 font-bold">
            Welcome{" "}
            <span className="text-orange-500 font-semibold uppercase">
              {" "}
              {user?.name != "" ? user.name : "User"}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Sign Up</Link>
            {user?.name != "" ? (
              <div className="flex flex-col justify-center items-start gap-4">
                <a onClick={handleLogout} className="hover:cursor-pointer">
                  Logout
                </a>
                <Link to={"/my-notes"}>View Notes</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};
