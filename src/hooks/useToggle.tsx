import { useCallback, useState } from "react";

export const useToggle = (initValue: boolean = false) => {
  const [flag, setFlag] = useState(initValue);

  const toggle = useCallback((value = !flag) => {
    setFlag(value);
  }, [flag]);

  return [flag, toggle] as const;
};
