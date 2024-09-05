/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Header/Header";
import { useState } from "react";
import { BASE_URL } from "../../../env/env";
import axios from "axios";

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
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-indigo-500 from-20% via-sky-600 via-100%">
        <Header />
        <section className="py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="w-[90%]">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Login
                </h2>
                <p className="mt-2 text-sm text-black">
                  Don&#x27;t have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </Link>
                </p>
                <form className="mt-8" onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
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
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <a
                          href="#"
                          title=""
                          className="text-sm font-semibold text-black hover:underline"
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
