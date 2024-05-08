/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import useAsync from "../hooks/useAsync";

function DataView() {
  const { loading, error, value, refetch } = useAsync<{ [key: string]: any }>(
    () => fetch("https://dummyjson.com/products/1/")
  );

  return (
    <div>
      <button onClick={refetch}>Fetch Data</button>
      <h3>{loading ? "Loading..." : error ? "Error.." : value?.title}</h3>
    </div>
  );
}

export default DataView;
