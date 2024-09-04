import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";

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
  const handleLogout = () => {
    localStorage.removeItem("user");
    checkUserAuthentication();
    navigate("/");
  };

  useEffect(() => {
    checkUserAuthentication();
  }, []);
  return (
    <>
      <div className="w-full h-[5rem] bg-gray-700 flex justify-between items-center px-8 text-white">
        <Link to={"/"} className="font-bold text-2xl uppercase text-blue-500">
          My Notes
        </Link>
        <div className="">
          Welcome{" "}
          <span className="text-orange-500 uppercase">
            {" "}
            {user?.name != "" ? user.name : "User"}
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 desktop-view">
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
        </div>
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
