import React, { useEffect, useState } from "react";
import UsersList, { User } from "./UsersList";
import CreateButton from "./CreateButton";

const azsort = (a: User, b: User) =>
  a.name < b.name ? -1 : a.name === b.name ? 0 : 1;

export default function AllUsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/users");
        const data = (await response.json()) as User[];
        if (data) {
          setUsers(data.sort(azsort));
        }
      } catch (e) {}
    })();
  }, []);
  return (
    <>
      <div className="page_header">
        <h4>Users A-Z:</h4>
        <CreateButton className="page_button" />
      </div>
      <a className="page_back" href={"/"}>
        Back to Dashboard
      </a>
      <UsersList users={users} />
    </>
  );
}
