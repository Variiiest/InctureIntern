import React, { useState } from 'react'
import Hrservice from './Hrservice';

export default function Application(props) {
    const data = props.data;
  const [ID, setID]= useState()
  const handleChange= (event) => {
      event.preventDefault()
      Hrservice.leavestatuschange(ID).then(
        (e)=>{
          console.log("Approved")
        },
  
        error => {
          console.log("Error")
        }
      )
      }
      const handlereject= (event) => {
        event.preventDefault()
        Hrservice.denyleave(ID).then(
          (e)=>{
            console.log("Approved")
          },
    
          error => {
            console.log("Error")
          }
        )
        }
  

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="w-full mt-5 rounded-lg overflow-hidden">
          {data.map((application) => (
              <>
                <div className="flex mt-2" key={application.id}>
                  <div className="h-full bg-white text-left px-4 py-4 w-full justify-end">
                    <p className="flex items-center flex-wrap">
                      <span className="font-bold text-lg text-gray-800">
                        {application.id} {application.appliedby}
                      </span>
                    </p>
                    <div className="flex items-center flex-wrap ">
                    {application.type==='H' && <span className="relative text-xs">Health leave</span>}
                       {application.type==='L' && <span className="relative text-xs">Leisure Leave</span>}
                       {application.type==='M' && <span className="relative text-xs">Maternity leave</span>}
                        
                      <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="sm:pl-4 py-2 sm:mt-0 text-center sm:text-left bg-white">
                <p className="leading-relaxed text-lg mb-4">
                 {application.description}
                </p>
                <form onSubmit={handleChange}>
                <button onClick={()=>setID(application.id)} className="bg-green-400 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-gree-600 transition duration-300">
                  Accept
                </button></form>
                <form onSubmit={handlereject}>
                <button onClick={()=>setID(application.id)} className="bg-red-500 text-white px-4 py-2 ml-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300">
                  Reject
                </button>
                </form>
              </div>
                </>
            
          ))}
          </div>

   
        </div>
      </section>
    </div>
  );
}
