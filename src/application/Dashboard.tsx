import React from "react";
import CreateButton from "./CreateButton";

export default function Dashboard() {
  return (
    <>
      <div className="page_header">
        <h4>Actions:</h4>
        <CreateButton className="page_button" />
      </div>
      <ul className="dashboard">
        <li>
          <a href={"/create"}>Create new user</a>
        </li>
        <li>
          <a href={"/all"}>Users A-Z</a>
        </li>
        <li>
          <a href={"/randomize"}>Randomized users</a>
        </li>
        <li>
          <a href={"/speaker"}>Random speaker</a>
        </li>
      </ul>
    </>
  );
}
