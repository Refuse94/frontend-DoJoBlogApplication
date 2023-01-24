import { History } from "history";

export const handleDelete = async (id: number, history: History) => {
  await fetch("http://localhost:8000/data_blogs/" + id, {
    method: "DELETE",
  }).then(() => {
    history.push("/");
  });
};
