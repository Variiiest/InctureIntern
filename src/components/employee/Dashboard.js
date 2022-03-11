import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "./AuthService";


export default function Dashboard() {
  const [show, setShow] = useState(false);
  const user = AuthService.getCurrentUser();
  const [Data, setData]= useState([]);
  AuthService.leaveapplied(user.id).then(
    (a)=> {
        setData(a)
    }
  ,[])

 


  return (
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
                <Link to="/leaveboard">
                  <li className="text-white pt-8">
                    <div className="flex items-center">
                      <p className="text-indigo-500 ml-3 text-lg">Dashboard</p>
                    </div>
                  </li>
                </Link>
                <Link to="/applyleave">
                  <li className="text-gray-800 pt-4">
                    <div className="flex items-center">
                      <p className="text-gray-800 ml-3 text-lg">Apply leave</p>
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
                Dashboard
              </li>
              <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
                <Link to="/applyleave">Apply leave</Link>
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
          <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between">
              <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                  <div className="flex">
                    <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                      <svg
                        width={18}
                        height={18}
                        className="w-4 lg:w-auto"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                          stroke="#455A64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.9993 16.9993L13.1328 13.1328"
                          stroke="#455A64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Applied By
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300" />
                </tr>
              </thead>
              <tbody className="bg-white">
                {Data.map((application) => (
                  <tr key={application.id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {application.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900">
                        {application.appliedby}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative text-xs">active</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                       {application.type==='H' && <span className="relative text-xs">Health leave</span>}
                       {application.type==='L' && <span className="relative text-xs">Leisure Leave</span>}
                       {application.type==='M' && <span className="relative text-xs">Maternity leave</span>}
                        
            
                    </td>
                  
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                       {application.level}
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
