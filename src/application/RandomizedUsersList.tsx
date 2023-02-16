import React, { useEffect, useState } from "react";
import UsersList, { User } from "./UsersList";
import CreateButton from "./CreateButton";

const shuffle = (data: any[]) => {
  let step = data.length;
  while (step > 0) {
    const sIndex = Math.floor(Math.random() * step);
    step--;
    [data[step], data[sIndex]] = [data[sIndex], data[step]];
  }
  return data;
};

export default function RandomizedUsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/users");
        const data = (await response.json()) as User[];
        if (data) {
          setUsers(shuffle(data));
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
