import React from "react";

export default function CreateButton({ className }: { className?: string }) {
  return (
    <a href={"/create"} className={`button_primary ${className}`}>
      Create new user
    </a>
  );
}
