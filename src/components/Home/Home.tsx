import { useEffect, useState } from "react";
import { Header } from "../Header/Header";

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
        <div className="w-full">
          {user?.name == '' ? <p className="text-white">Login Please or Create New Account</p> : user.name}
        </div>
      </div>
    </>
  );
};
