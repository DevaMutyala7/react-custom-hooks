import { useCallback, useRef } from "react";

export default function useThrottle(
  func: () => void,
  delay: number,
  options: { leading: boolean; trailing: boolean }
) {
  let timerId = useRef<any>(null);
  let leading = useRef<any>(options.leading);

  return useCallback(
    function (event) {
      const isLeading = leading.current && !timerId.current;

      if (isLeading) {
        func.apply(this, [arguments, event]);
        leading.current = false;
      }

      if (!timerId.current) {
        timerId.current = setTimeout(() => {
          if (!isLeading) {
            func.apply(this, arguments);
          }
          clearTimeout(timerId.current);
          timerId.current = null;
        }, delay);
      }
    },
    [delay, func]
  );
}
