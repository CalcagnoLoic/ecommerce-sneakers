import { useEffect, useCallback } from "react";

export const useClickOutside = ({
  ref,
  callback,
}: {
  ref: React.RefObject<HTMLDivElement>;
  callback: () => void;
}) => {
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
