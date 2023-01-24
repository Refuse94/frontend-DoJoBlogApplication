import { useHistory, useParams } from "react-router-dom";
import { ResponseBlog, useFetch } from "./useFetch";
import { handleDelete } from "./api";

export const BlogDetails: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/data_blogs/" + id) as ResponseBlog;
  const history = useHistory();

  // const handleDelete = () => {
  //   fetch("http://localhost:8000/data_blogs/" + id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     history.push("/");
  //   });
  // };
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by{" "}
            <span
              style={{
                color: "yellow",
                fontSize: "60px",
                fontWeight: "bolder",
              }}
            >
              {" "}
              {blog.author}
            </span>
          </p>
          <div>{blog.body}</div>
          <button
            style={{ background: "green", color: "white" }}
            onClick={() => handleDelete(parseInt(id), history)}
          >
            delete blog
          </button>
        </article>
      )}
    </div>
  );
};
