export const Default: React.FC<{}> = () => {
  return <div></div>;
};

/* import { useParams } from "react-router-dom";
import { Blog } from "./Main";
import { useFetch } from "./useFetch";

export const BlogDetails: React.FC<{ blog: Blog[] }> = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/data_blogs" + id);
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};
*/
