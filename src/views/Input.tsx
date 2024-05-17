import React from "react";

export default function Input({ title, optmizer }) {
  const handler = (args) => {
    // eslint-disable-next-line no-restricted-globals
    console.log("clicked", args.target.value);
  };
  const debouncedHandler = optmizer(handler, 2000, {
    leading: true,
    trailing: false,
  });
  return (
    <div>
      <h3>{title}</h3>
      <input onChange={debouncedHandler} />
    </div>
  );
}
