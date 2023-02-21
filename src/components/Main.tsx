import { BlogList } from "./BlogList";
import { ResponseBlogs, useFetch } from "./useFetch";

export interface Blog {
  title: string;
  body: string;
  author: number;
  id: number;
}
export interface Author {
  firstname: string;
  lastname: string;
  age: number;
  gender: "female" | "male";
  id: number;
}
// npx json-server --watch src/data/db.json --port 8000

export const Main: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <div>
      <BlogList blogs={blogs}></BlogList>
    </div>
  );
};
