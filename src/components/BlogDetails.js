import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import useFetch from "./useFetch";
import { Preview } from "./Preview";

export const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, loading, error} = useFetch(`http://localhost:8000/blogs/${id}`)

  return (
    <div className="flex flex-col items-center justify-center py-3 my-2">
      {loading ? <p className="text-gray-500 p-2 text-lg">Loading...</p> : <p></p>}
      {error!=="" ? <p className="text-gray-500 p-2 text-lg">ERROR: {error}...</p> : <p></p>}
      {blog && <Preview blog = {blog}/>}
    </div>
  )
}
