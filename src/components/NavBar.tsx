import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";

export const NavBar: React.FC<{}> = () => {
  const { data } = useFetch("http://localhost:5000/users");

  return (
    <>
      <div className="nav_bar">
        <h2>Titlle page</h2>
        <button
          onClick={() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName: "JohnNew",
                lastName: "Šimko",
                age: 35,
                gender: "male",
              }),
            }).then(async (res) => {});
          }}
        >
          Request
        </button>

        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
          to="/"
        >
          Home
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/create">
          New Blog
        </Link>
      </div>
      {(data as any[])?.map((user) => (
        <div>
          <p>{`Username: ${user.firstName}`}</p>
          <p>{`Lastname: ${user.lastName}`}</p>
          <p> {`Age: ${user.age}`}</p>
          <p>{`Gender: ${user.gender}`}</p>
          <p>{`***********************`}</p>
        </div>
      ))}
    </>
  );
};
