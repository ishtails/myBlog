import React from 'react'
import {useHistory} from 'react-router-dom'

export const Preview = ({blog}) => {
  const history = useHistory()

  const handleDelete = ()=>{
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE"
    }).then(()=>{
      console.log("Blog Deleted")
      history.push('/')
    })
  }

  return (
    <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-4xl px-10 max-w-5xl text-blue-500 uppercase">{blog.title}</h1>
        <div className="px-10 max-w-5xl text-justify">{blog.body}</div>
        <div className="flex flex-row-reverse w-[80%]">
            <div className="text-blue-500 font-bold bg">~ {blog.author}</div>
        </div>
        <button className="border rounded-md p-2 bg-red-500 text-white transition-all shadow-md hover:scale-110" onClick={handleDelete}> Delete Blog </button>
    </div>
  )
}
