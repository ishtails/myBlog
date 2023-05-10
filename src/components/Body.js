import { Bloglist } from "./Bloglist";
import useFetch from "./useFetch";

export const Body = () => {

  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="flex flex-col items-center justify-center py-3 my-2">
      {blogs && <Bloglist blogs={blogs} title="ALL BLOGS"/>}
      {loading ? <p className="text-gray-500 p-2 text-lg h-screen">Loading...</p> : <p></p>}
      {error!=="" ? <p className="text-gray-500 p-2 text-lg">ERROR: {error}...</p> : <p></p>}
    </div>
  );
};