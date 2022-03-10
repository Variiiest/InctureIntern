import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import logger from "../services";

export default function LoginHr() {
  const [isLogin, setisLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [ErrorMessage, setErrorMessage] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault()
    setisLogin(true)
    setUser(1)
    setErrorMessage("No")
    console.log(ErrorMessage)
    console.log(user)
    console.log(logger.login)
    console.log('logging in with', email, password)
  };

  if (isLogin) {
    return <Navigate to="/dashhr" />;
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Sign In As Manager</p>
          <h2 className="text-xl font-bold">With Given credentials</h2>
        </div>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mt-4">
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="Enter email address"
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              placeholder="Password"
            />
          </div>
          <div className="mt-4">
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
