import { useEffect, useRef } from "react";

export default function usePrevious(initialVal: any): any {
  const ref = useRef<any>(undefined);

  useEffect(() => {
    ref.current = initialVal;
  }, [initialVal]);

  return ref.current;
}
