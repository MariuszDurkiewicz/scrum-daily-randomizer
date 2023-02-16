import React, { useCallback, useState } from "react";
import Form from "./Form";

export default function CreateUserForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = useCallback(
    (data: any) => {
      setSending(true);
      (async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/users/create",
            {
              method: "POST",
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
    [setSending]
  );

  return (
    <>
      <div className="page_header">
        <h4>Create new User:</h4>
      </div>
      <a className="page_back" href={"/"}>
        Back to Dashboard
      </a>
      <Form onSubmit={onSubmit} disabled={sending} data={null} />
    </>
  );
}
