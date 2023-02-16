import React from "react";
import { Outlet, createBrowserRouter, useParams } from "react-router-dom";
import CreateUserForm from "./CreateUserForm";
import Dashboard from "./Dashboard";
import AllUsersList from "./AllUsersList";
import EditUserForm from "./EditUserForm";
import RandomizedUsersList from "./RandomizedUsersList";
import RandomSpeaker from "./RandomSpeaker";

function Root() {
  return (
    <>
      <header>Developers</header>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "create",
        element: <CreateUserForm />,
      },
      {
        path: "users/:id",
        element: <EditUserForm />,
      },
      {
        path: "all",
        element: <AllUsersList />,
      },
      {
        path: "randomize",
        element: <RandomizedUsersList />,
      },
      {
        path: "speaker",
        element: <RandomSpeaker />,
      },
    ],
  },
]);

export default router;
