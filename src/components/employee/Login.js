import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  Navigate } from "react-router-dom"; 
import logger from "../services";

export default function Login() {
  const [isLogin, setisLogin]= useState(false);

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [ErrorMessage, setErrorMessage] = useState(null)

  const handleLogin = (event) => {
    event.preventDefault()
    setisLogin(true)
    setUser(1)
    setErrorMessage("No")
    console.log(ErrorMessage)
    console.log(user)
    console.log(logger.login)
    console.log('logging in with', email, password)
  }

  if (isLogin) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row text-gray-900 items-center">
        <div className="bg-blue-700 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://ik.imagekit.io/vpa3fwqdnd/undraw_Login_re_4vu2_wwaCNbSPb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646587901371"
            alt=""
            className="w-full h-full object-cover bg-blue-700"
          />
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
          <p className="p-2 text-2xl bg-gray-200 rounded-2xl"> Leave Management System  </p>
          <p className="text-base"> Team: Bug !Found</p>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
             
              Log in to your account
            </h1>
            <form className="mt-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                   value={email}
                   onChange={({ target }) =>setEmail(target.value)}
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full py-3 bg-white mt-2 border-b focus:border-blue-700 focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full py-3 bg-white mt-2 border-b focus:border-blue-700 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 text-white font-semibold rounded px-4 py-3 mt-6"
              >

                Log In
              </button>
             


            </form>
            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/register"
                className="text-blue-700 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
            </p>
            <p className="mt-4 text-blue-700 hover:text-blue-600 font-semibold">
              Login As{" "}
              <Link
                to="/loginadmin"
                className="text-green-600 hover:text-green-600 font-semibold"
              >
                Admin
              </Link>
            </p>
            <p className="mt-4 text-blue-700 hover:text-blue-600 font-semibold">
              Login As{" "}
              <Link
                to="/loginhr"
                className="text-green-600 hover:text-green-600 font-semibold"
              >
              Manager
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
