import { useCallback, useRef } from "react";

export default function useThrottle(func: () => void, delay: number) {
  let timer = useRef<any>(null);
  return useCallback(
    function () {
      if (!timer.current) {
        timer.current = setTimeout(() => {
          func.apply(this, arguments);
          clearTimeout(timer.current);
          timer.current = null;
        }, delay);
      }
    },
    [delay, func]
  );
}
