import { useEffect, useCallback } from "react";
import { useClickOutsideInterface } from "../types/interface";

export const useClickOutside = ({ ref, callback }: useClickOutsideInterface) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent): void => {
      if (
        ref.current &&
        callback &&
        !ref.current.contains(event.target as Node)
      ) {
        callback(false);
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
