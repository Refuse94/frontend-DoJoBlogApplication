import { useState, useEffect } from "react";
import { Author, Blog } from "./Main";

interface ResponseBase {
  isPending: boolean;
  error: string | null;
}

export interface ResponseBlog extends ResponseBase {
  data: Blog | null;
}
export interface ResponseBlogs extends ResponseBase {
  data: Blog[] | null;
}

export interface ResponseAuthors extends ResponseBase {
  data: Author[] | null;
}

// export const useFetch = (
//   url: string
// ): ResponseBlogs | ResponseBlog | ResponseAuthors => {
//   const [data, setData] = useState<Blog[] | Blog | Author[] | null>(null);
//   const [isPending, setIsPending] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//         .then(async (res) => {
//           if (!res.ok) {
//             throw Error("Could not fetch the data for that resource");
//           }

//           const data = (await res.json()) as Blog;
//           setData(data);
//           setIsPending(false);
//         })
//         .catch((err) => {
//           setError(err.message);
//           setIsPending(false);
//         });
//     }, 1000);
//   }, [url]);

//   if (Array.isArray(data)) {
//     return { data, isPending, error };
//   }
//   return { data, isPending, error };
// };

export function useFetch<T>(url: string): {
  data: T | null;
  isPending: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }

        const data = (await res.json()) as T;
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  if (Array.isArray(data)) {
    return { data, isPending, error };
  }
  return { data, isPending, error };
}
