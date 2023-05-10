import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between max-w-5xl m-auto items-center px-5 py-3 text-gray-800">
        <div>
            <Link to='/' className="text-4xl sm:text-5xl text-blue-500">myBlogs</Link>
        </div>
        <div className="space-x-1 sm:space-x-4">
            <Link to="/" className="rounded-md p-2 transition-all hover:text-blue-600">Home</Link>
            <Link to="/create" className="rounded-md p-2 transition-all hover:text-blue-600">New Blog</Link>
        </div>
    </div>
  )
}