/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Header } from "../../Header/Header";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../env/env";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const baseUrl = BASE_URL;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toast.promise(
      signUpApi(),
      {
        pending: "Saving data ...",
        success: "Sign Up successful",
        error: "Something went wrong",
      },
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const signUpApi = async () => {
    return await axios.post(`${baseUrl}/user/add`, formData);
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    return formData.name && formData.email && formData.password;
  };
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-indigo-500 from-20% via-sky-600 via-100%">
        <Header />
        <section className="py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="w-[90%]">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Sign up
                </h2>
                <p className="mt-2 text-base text-black">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-black transition-all duration-200 hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Full Name{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border outline-none placeholder:text-gray-800 border-black bg-transparent px-3 py-2 text-sm focus:border-white disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border outline-none placeholder:text-gray-800 border-black bg-transparent px-3 py-2 text-sm focus:border-white disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border outline-none placeholder:text-gray-800 border-black bg-transparent px-3 py-2 text-sm focus:border-white disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          autoComplete=""
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        disabled={!isFormValid()}
                      >
                        Create Account{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto h-full w-full rounded-md object-cover"
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1742&amp;q=80"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <ToastContainer limit={1} />
    </>
  );
};
