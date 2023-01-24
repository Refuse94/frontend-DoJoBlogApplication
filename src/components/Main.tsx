import { BlogList } from "./BlogList";
import { useFetch } from "./useFetch";

export interface Blog {
  title: string;
  body: string;
  author: string;
  id: number;
}

// npx json-server --watch src/data/db.json --port 8000

export const Main: React.FC = () => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/data_blogs"
  );
  console.log("rerender", data);
  return (
    <div>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blog={data}></BlogList>}
    </div>
  );
};
