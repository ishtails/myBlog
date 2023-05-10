import React from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const NotFound = () => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center w-screen h-screen absolute justify-center space-y-4">
      <h1 className="text-2xl">404 Not Found!</h1>
      <button className="border p-2 rounded-md bg-blue-500 text-white" onClick={()=>{
        history.push('/');
      }}>Back to Home</button>
    </div>
  )
}
