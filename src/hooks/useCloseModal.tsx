import { useCallback, useEffect } from "react";
import { useModalInterface } from "../types/interface";

export const useCloseModal = ({ ref, state, callback }: useModalInterface) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent): void => {
      if (
        state &&
        callback &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        callback(false);
      }
    },
    [callback, ref, state],
  );

  useEffect(() => {
    if (state) {
      document.body.addEventListener("click", handleClickOutside);
    } else {
      document.body.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, state]);
};
