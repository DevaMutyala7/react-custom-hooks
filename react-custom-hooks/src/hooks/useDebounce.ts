import { useCallback, useRef } from "react";

export default function useDebounce(
  func: () => void,
  delay: number,
  immediate: boolean = false
) {
  let timer = useRef<any>();

  return useCallback(
    function () {
      clearTimeout(timer.current);

      let callNow = immediate && !timer.current;

      timer.current = setTimeout(() => {
        if (!callNow) {
          func.call(this, arguments);
        }
      }, 1000);

      if (callNow) {
        func.call(this, arguments);
      }
    },
    [func, immediate]
  );
}
