import { useCallback, useEffect } from "react";
import { useModalInterface } from "../types/interface";

export const useModal = ({ ref, state, callback }: useModalInterface) => {
  const handleBodyOverflow = useCallback((shouldOverflow: boolean): void => {
    document.body.classList.toggle("no-scroll", shouldOverflow);
  }, []);

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
      handleBodyOverflow(true);
      document.body.addEventListener("click", handleClickOutside);
    } else {
      handleBodyOverflow(false);
      document.body.removeEventListener("click", handleClickOutside);
    }

    return () => {
      handleBodyOverflow(false);
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [handleBodyOverflow, handleClickOutside, state]);
};
