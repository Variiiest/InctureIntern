import React, { useEffect, useState } from 'react'
import logger from './services';

export default function Employees() {

 const [employees, setEmployees]= useState();

 useEffect(() => {
   logger.getAll()
      .then(response => {
        setEmployees(response.data)
      })
  }, [])

  return (
    <div>Employees

        {employees}
    </div>
  )
}
