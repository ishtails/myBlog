import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
          fetch(url, { signal: abortCont.signal })
            .then((res) => {
              if (!res.ok) {
                throw Error(res.statusText);
              }

              return res.json();
            })
            .then((data) => {
              setData(data);
              setloading(false);
              setError("");
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                  console.log('Fetch Aborted')

                } else{
                  setloading(false);
                  setData(null);
                  setError(err.message);
                }
            });
        }, 500);

        return () => {abortCont.abort()}
    }, [url])

    return { data, loading, error }
}

export default useFetch;