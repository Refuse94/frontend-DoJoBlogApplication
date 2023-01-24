import { useState } from "react";
import { useHistory } from "react-router-dom";

export const NewBlog: React.FC<{}> = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("mario");
  const history = useHistory();
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/data_blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      console.log("new Blogg was Added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div>
      <h2>Add new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="">Add Blog body:</label>
        <textarea
          name=""
          id=""
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="">Author:</label>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <br />
        <button>Add Blog</button> <br />
        <br /> <br />
        {title} <br />
        {body} <br />
        {author}
      </form>
    </div>
  );
};
