import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Author, Blog } from "./Main";
import { useFetch } from "./useFetch";
import { Dropdown, Select } from "semantic-ui-react";

export const NewBlog: React.FC<{ authors: Author[] }> = ({ authors }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<number | undefined>(undefined);
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = { title, body, author };

    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      console.log("new Blogg was Added");
      history.push("/");
    });
  };

  // const disabled =
  //   author === undefined
  //     ? true
  //     : false || title
  //     ? true
  //     : false || body
  //     ? true
  //     : false;

  const disabled = !author || !title || !body;

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
        <Select
          placeholder="Select your Author"
          value={author}
          onChange={(_e, { value }) => {
            setAuthor(value as number);
          }}
          options={
            authors?.length
              ? authors.map((author) => ({
                  key: author.id,
                  value: author.id,
                  text: author.firstname,
                }))
              : []
          }
        />
        <br />
        <button disabled={disabled} type={"submit"}>
          Add Blog
        </button>{" "}
        <br />
        <br /> <br />
        {title} <br />
        {body} <br />
        {author}
      </form>
    </div>
  );
};
