import { useEffect, useRef, useState } from "react";

export default function useIdle(timePeriod: number) {
  const [isIdle, setIsIdle] = useState(false);
  const timerId = useRef<any>();
  const events = [
    "mousemove",
    "mousedown",
    "keypress",
    "mousewheel",
    "touchmove",
  ];

  useEffect(() => {
    addEvents();

    return () => {
      events.forEach((et) => {
        document.removeEventListener(et, restartTimer, false);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restartTimer = () => {
    setIsIdle(false);
    clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      goInActive();
    }, timePeriod);
  };

  const goInActive = () => {
    setIsIdle(true);
  };

  const addEvents = () => {
    events.forEach((et) => {
      document.addEventListener(et, restartTimer, false);
    });
  };

  return isIdle;
}
