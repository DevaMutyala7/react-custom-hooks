import { useCallback, useEffect, useRef, useState } from "react";

export default function useAsync<T>(
  asyncFn: () => Promise<any>,
  immediate: boolean = false
) {
  const [value, setValue] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const mounted = useRef<boolean>();

  const refetch = useCallback(async () => {
    if (mounted.current) {
      setLoading(true);
    }
    try {
      let data = await asyncFn().then((res) => res.json());
      if (mounted.current) {
        setValue(data);
      }
    } catch (err) {
      if (mounted.current) {
        setError(err as Error);
      }
    } finally {
      if (mounted.current) {
        setLoading(false);
      }
    }
  }, [asyncFn]);

  useEffect(() => {
    mounted.current = true;
    if (immediate) {
      refetch();
    }

    return () => {
      mounted.current = false;
    };
  }, [immediate, refetch]);

  return { loading, error, value, refetch };
}
