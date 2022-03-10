import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import logger from '../services';

export default function LoginAdmin() {
  const [isLogin, setisLogin]= useState(false);

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [ErrorMessage, setErrorMessage] = useState(null)

  const handleLogin = (event) => {
    event.preventDefault()
    setisLogin(true)
    try {
      user = logger.login({
       email, password,
      })
      setUser(user)
      setEmail('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    console.log(ErrorMessage)
    console.log(user)
    console.log(logger.login)
    console.log('logging in with', email, password)
  }

  if (isLogin) {
    return <Navigate to="/dashboardadmin" />
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">Sign In As Admin</p>
            <h2 className="text-xl font-bold">With given credentials</h2>
          </div>
          <form className="mt-6" onSubmit={handleLogin}>
          <div className='mt-4'>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" value={email}
                   onChange={({ target }) =>setEmail(target.value)}
                  type="email"
                  placeholder="Enter Email Address" />
          </div>
          <div className='mt-4'>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="Enter Password" />
          </div>
          <div className='mt-4'> 
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
          </div>
          </form>

        </div>
      </section>
  )
}
