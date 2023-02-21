import { useHistory, useParams } from "react-router-dom";
import { ResponseBlog, useFetch } from "./useFetch";
import { handleDelete } from "./api";
import { Author, Blog } from "./Main";

export const BlogDetails: React.FC<{ authors: Author[]; blogs: Blog[] }> = ({
  authors,
  blogs,
}) => {
  const { id } = useParams<{ id: string }>();
  // const {
  //   data: blog,
  //   error,
  //   isPending,
  // } = useFetch("http://localhost:5000/blogs/" + id) as ResponseBlog;

  const blog = blogs.find((b) => b.id === parseInt(id));

  const history = useHistory();
  //   fetch("http://localhost:8000/data_blogs/" + id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     history.push("/");
  //   });
  // };

  return (
    <div>
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
              {authors?.find((author) => author.id == blog.author)?.firstname ??
                "Author not found"}
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
