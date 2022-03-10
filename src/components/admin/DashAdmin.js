import React, { useState } from "react";
import Application from "./Application";
import Tab from "./Tab";
export default function DashAdmin() {
    const [show, setShow] = useState(null);
    return (
        <>
            <div className="bg-gray-200 h-full w-full">
                {/* Code block starts */}
                <nav className="w-full bg-gray-800 hidden xl:block shadow">
                    <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
                        <div className="flex items-center">
                            <div className="mr-10 flex items-center">
                            
                                <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block">Admin Dashboard</h3>
                            </div>
                    
                        </div>
                     
                    </div>
                </nav>
                {/* Navbar */}
                <nav>
                    <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
                      
                        <div>
                            <div id="menu" className="text-white" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={4} y1={6} x2={20} y2={6} />
                                        <line x1={4} y1={12} x2={20} y2={12} />
                                        <line x1={4} y1={18} x2={20} y2={18} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "absolute w-full h-full transform -translate-x-0 z-40" : "absolute w-full h-full transform -translate-x-full z-40"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                        <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="px-6 h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="mt-6 flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                  
                                                    <p className="text-base  text-white ml-3">Admin </p>
                                                </div>
                                                <div id="cross" className="text-white" onClick={() => setShow(!show)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
               <div>
                 
                <Tab/>
                 <Application/>
               </div>
            </div>
        </>
    );
}
