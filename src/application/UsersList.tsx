import React, { useMemo } from "react";

export type User = {
  id: string;
  name: string;
  role: string;
  team: string;
  status: string;
};

export default function UsersList({ users }: { users: User[] }) {
  const headers = ["name", "email", "role", "team", "status", "actions"];

  return (
    <>
      {users && (
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.role}</td>
                <td>{user.team}</td>
                <td>{user.status}</td>
                <td>
                  <a href={`/users/${user.id}`}>Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
