import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

export const NewForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, author, body };

    setSubmitting(true);
    setMessageSuccess("")

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        setMessageSuccess("Submitted Successfully!")
        setSubmitting(false);
        setTitle("");
        setBody("");

        setTimeout(() => {
          history.push('/')
        }, 1000);
      }).catch(err=>console.log(err))
    }, 1000);
  };

  return (
    <div className="my-5 flex flex-col items-center">
      <div className="text-3xl uppercase font-bold text-blue-500">
        Create New Blog
        <hr></hr>
      </div>
      <br></br>

      <form
        className="flex flex-col w-[50%] items-center my-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="mb-2">Author</label>
        <input
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          id="message"
          rows="1"
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        >
        </input>
        <br></br>

        <label className="mb-2">Title</label>
        <input
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="message"
          rows="1"
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        ></input>
        <br></br>

        <label className="mb-2">Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          id="message"
          rows="10"
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Express Yourself..."
        ></textarea>
        <br></br>

        {!submitting && (
          <button
            type="submit"
            className="border p-2 rounded-md bg-blue-500 text-white"
          >
            Submit
          </button>
        )}

        {submitting && (
          <button
            disabled
            type="submit"
            className="border p-2 rounded-md bg-blue-500 text-white"
          >
            Submiting...
          </button>
        )}
      </form>
      <p>{messageSuccess}</p>
    </div>
  );
};
