import React, { memo } from "react";
import useWhyDidYouUpdate from "../hooks/useWhyDidYouUpdate";

function CounterClone(props) {
  useWhyDidYouUpdate(props);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{props.count}</h3>
    </div>
  );
}

export default memo(CounterClone);
