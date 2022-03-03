import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <section className="flex flex-col md:flex-row text-gray-900 items-center">
        <div className="bg-blue-700 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create account 
            </h1>
            <form className="mt-6" action="#_" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full py-3 bg-white mt-2 border-b focus:border-blue-700 focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
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
              Register
              </button>
            </form>
            <p className="mt-8">
              Have an account?{" "}
              <Link
                to="/"
                className="text-blue-700 hover:text-blue-700 font-semibold"
              >
          Login 
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
