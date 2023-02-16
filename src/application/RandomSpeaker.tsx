import React, { useEffect, useState } from "react";
import UsersList, { User } from "./UsersList";
import CreateButton from "./CreateButton";

const selectOne = (data: any[]) => {
  return data[Math.floor(Math.random() * data.length)];
};

export default function RandomSpeaker() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/users");
        const data = (await response.json()) as User[];
        if (data) {
          setUsers([selectOne(data)]);
        }
      } catch (e) {}
    };

    load();
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
