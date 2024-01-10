import { useEffect, useCallback } from "react";
import { useClickOutsideType } from "../types/types";

export const useClickOutside = ({ ref, callback }: useClickOutsideType) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
};
