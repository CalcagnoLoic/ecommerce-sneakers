import { useEffect } from "react";
import { useModalType } from "../types/interface";

export const useModal = ({ref, state, callback}: useModalType) => {
  useEffect(() => {
    const handleBodyOverflow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (state && ref.current && !ref.current.contains(event.target as Node)) {
        callback(false);
      }
    };

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
  }, [ref, state, callback]);
};
