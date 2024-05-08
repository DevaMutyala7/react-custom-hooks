import React from "react";

export default function Input({ title, optmizer }) {
  const handler = () => {
    // eslint-disable-next-line no-restricted-globals
    console.log("clicked");
  };
  const debouncedHandler = optmizer(handler, 1000);
  return (
    <div>
      <h3>{title}</h3>
      <input onChange={debouncedHandler} />
    </div>
  );
}
