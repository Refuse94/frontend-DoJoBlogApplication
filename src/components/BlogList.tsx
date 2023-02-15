import { Blog } from "./Main";
import { Link } from "react-router-dom";
import { handleDelete } from "./api";
import { useHistory } from "react-router-dom";

export const BlogList: React.FC<{
  blogs: Blog[];
}> = (props) => {
  const blogs = props.blogs;
  const history = useHistory();
  return (
    <div className="blog">
      <p>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "14px",
              }}
              to={`/data_blogs/${blog.id}`}
            >
              <h2 style={{ fontSize: "30px" }}>{blog.title} </h2>
              <p>
                written by{" "}
                <span
                  style={{
                    color: "yellow",
                    fontWeight: "bold",
                    fontSize: "23px",
                  }}
                >
                  {" "}
                  {blog.author}
                </span>{" "}
              </p>
              <button
                onClick={async () => await handleDelete(blog.id, history)}
                style={{ background: "green", color: "white" }}
              >
                delete blog
              </button>
            </Link>
          </div>
        ))}{" "}
      </p>
    </div>
  );
};
