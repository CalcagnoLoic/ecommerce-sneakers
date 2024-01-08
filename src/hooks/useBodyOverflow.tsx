import { useEffect } from "react";

export const useBodyOverflow = (state: boolean): void => {
  useEffect(() => {
    const handleBodyOverflow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    state ? handleBodyOverflow(true) : handleBodyOverflow(false);

    return (): void => {
      handleBodyOverflow(false);
    };
  }, [state]);
};
