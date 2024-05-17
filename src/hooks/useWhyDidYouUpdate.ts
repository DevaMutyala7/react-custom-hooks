import { useEffect, useRef } from "react";

export default function useWhyDidYouUpdate(myProps) {
  //   const [isChanged, setIsChanged] = useState({ changed: false, reason: null });

  const prevProps = useRef<any>();

  useEffect(() => {
    if (prevProps.current) {
      let changedObj = {};

      let keys = Object.keys({ ...prevProps.current, ...myProps });

      keys.forEach((key) => {
        if (
          typeof prevProps.current[key] === "object" &&
          typeof myProps[key] === "object"
        ) {
          if (JSON.stringify(prevProps.current) !== JSON.stringify(myProps)) {
            changedObj[key] = myProps[key];
          }
        } else {
          if (prevProps.current[key] !== myProps[key]) {
            changedObj[key] = myProps[key];
          }
        }
      });

      if (Object.keys(changedObj).length) {
        console.log("these are causing changes", changedObj);
      }
    }

    prevProps.current = myProps;
  }, [myProps]);
}
