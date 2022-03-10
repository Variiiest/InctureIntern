import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Applyleave() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="absolute bg-gray-200 w-full h-full">
        {/* Navigation starts */}
        {/* Mobile */}
        <div
          className={
            show
              ? "w-full h-full absolute z-40  transform  translate-x-0 "
              : "w-full h-full absolute z-40  transform -translate-x-full"
          }
        >
          <div
            className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="px-6 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-indigo-500 ml-3 text-2xl font-bold">
                      Leave Manage
                    </p>
                  </div>
                  <div
                    id="cross"
                    className=" text-gray-800"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
                <ul className="f-m-m">
                  <Link to='#_'>
                    <li className="text-white pt-8">
                      <div className="flex items-center">
                        <p className="text-indigo-500 ml-3 text-lg">
                          Dashboard
                        </p>
                      </div>
                    </li>
                  </Link>
                  <Link to="/applyleave">
                    <li className="text-gray-800 pt-4">
                      <div className="flex items-center">
                        <p className="text-gray-800 ml-3 text-lg">
                          Apply leave 
                        </p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <nav className="w-full mx-auto bg-white shadow">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 lg:block">
                  Leave Manage
                </h3>
              </div>
              <ul className="pr-12 xl:flex items-center h-full hidden">
                <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
                <Link to="/applyleave">
                          Apply leave 
                          </Link>
                </li>
              </ul>
            </div>
            <div className="visible xl:hidden flex items-center relative">
              <svg
                onClick={() => setShow(!show)}
                aria-label="Main Menu"
                aria-haspopup="true"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6">
       
        <div className="py-2 overflow-x-auto ">
      
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ApplicatonID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Applied at</th>
                <th className="px-6 py-3 border-b-2 border-gray-300" />
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td> 
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
              
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">not active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td> 
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
              
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">not active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
            
            </tbody>
          </table>
          
        </div>
      </div>
        
     




        <div className="w-full h rounded">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="overflow-hidden">
                  <div className="px-4 py-5">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Leave"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Leave
                        </label>
                        <select
                          id="Leave"
                          name="Leave"
                          autoComplete="Leave-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Sick Leave</option>
                          <option>Maternity Leave</option>
                          <option>Casual Leave</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="From"
                          className="block text-sm font-medium text-gray-700"
                        >
                         From 
                        </label>
                       <input type="date" className='w-full py-2 px-3 border border-gray-300 bg-white rounded-md'/>
                     
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="To"
                          className="block text-sm font-medium text-gray-700"
                        >
                         To
                        </label>
                        <input type="date" className='w-full py-2 px-3 border border-gray-300 bg-white rounded-md'/>
                     
                      
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="application"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Applicaton
                        </label>
                        <textarea
                          type="text"
                          name="application"
                          id="application"
                          autoComplete="application"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border p-2 rounded-md h-64 focus:outline-none"
                          defaultValue={" "}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                  Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        
        </div>
      </div>
      
    </>
  )
}
