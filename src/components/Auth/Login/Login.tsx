/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Header/Header";
import { useState } from "react";
import { BASE_URL } from "../../../env/env";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const baseUrl = BASE_URL;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/user/login`, formData);
      setFormData({
        email: "",
        password: "",
      });
      localStorage.setItem("user", JSON.stringify(res.data.data));
      navigate("/my-notes");
    } catch (err) {
      console.log(err);
    }
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    return formData.email && formData.password;
  };

  const googleUserSignUpApi = async (userData: any) => {
    try {
      const res = await axios.post(`${baseUrl}/user/add`, userData);
      console.log("user id login", res.data.data);

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...userData,
          _id: res.data.data,
        })
      );

      navigate("/my-notes");
    } catch (err) {
      console.log(err);
      localStorage.removeItem("user");
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const { displayName, email } = result.user;
        googleUserSignUpApi({
          name: displayName ?? "test",
          email: email ?? "test@gmail.com",
          password: uuidv4(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-indigo-500 from-20% via-sky-600 via-100%">
        <Header />
        <section className="py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="w-[90%]">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Login
                </h2>
                <p className="mt-2 text-sm text-white">
                  Don&#x27;t have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-semibold text-white transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </Link>
                </p>
                <form className="mt-8" onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-white"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border outline-none placeholder:text-gray-800 border-black bg-transparent px-3 py-2 text-sm focus:border-white disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-white"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <a
                          href="#"
                          title=""
                          className="text-sm font-semibold text-white hover:underline"
                        >
                          {" "}
                          Forgot password?{" "}
                        </a>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border outline-none placeholder:text-gray-800 border-black bg-transparent px-3 py-2 text-sm focus:border-white disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        disabled={!isFormValid()}
                      >
                        Get started{" "}
                      </button>
                      <button
                        type="button"
                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 mt-4 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                        onClick={signInWithGoogle}
                      >
                        <span className="mr-2 inline-block">
                          <svg
                            className="h-6 w-6 text-rose-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                          </svg>
                        </span>
                        Login with Google
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto h-full w-full rounded-md object-cover"
                src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
