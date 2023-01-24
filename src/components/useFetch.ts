import { useState, useEffect } from "react";
import { Blog } from "./Main";

interface ResponseBlogBase {
  isPending: boolean;
  error: string | null;
}

export interface ResponseBlog extends ResponseBlogBase {
  data: Blog | null;
}
export interface ResponseBlogs extends ResponseBlogBase {
  data: Blog[] | null;
}

export const useFetch = (url: string): ResponseBlogs | ResponseBlog => {
  const [data, setData] = useState<Blog[] | Blog | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(async (res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }

          const data = (await res.json()) as Blog;
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  if (Array.isArray(data)) {
    return { data, isPending, error };
  }
  return { data, isPending, error };
};
