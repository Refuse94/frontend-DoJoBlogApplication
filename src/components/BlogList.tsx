import { Blog } from "./Main";
import { Link } from "react-router-dom";

export const BlogList: React.FC<{
  blog: Blog[];
}> = (props) => {
  const blogs = props.blog;

  return (
    <div className="blog">
      <p>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title} </h2>
              <p>written by {blog.author} </p>
              <button>delete blog</button>
            </Link>
          </div>
        ))}{" "}
      </p>
    </div>
  );
};
