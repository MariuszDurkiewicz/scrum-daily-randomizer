import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

type UserData = {
  id: string;
  name: string;
  role: string;
  team: string;
  status: string;
};

export default function EditUserForm() {
  const [sending, setSending] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/users/${params.id}`
        );
        const user = await response.json();
        setUser(user);
      } catch (e) {
        // error handling
      }
    })();
  }, [params, setUser]);

  const onSubmit = useCallback(
    (data: any) => {
      setSending(true);
      (async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/api/v1/users/${params.id}/update`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
        } catch (e) {
          // error handling
        } finally {
          setSending(false);
        }
      })();
    },
    [params, setSending]
  );

  return (
    <>
      <div className="page_header">
        <h4>Create new User:</h4>
      </div>
      <a className="page_back" href={"/"}>
        Back to Dashboard
      </a>
      <Form onSubmit={onSubmit} disabled={sending} data={user} />
    </>
  );
}
