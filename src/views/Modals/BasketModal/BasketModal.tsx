import { useRef, useEffect } from "react";
import { stateProps } from "../../../types/types";

export const BasketModal: React.FC<stateProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const basketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeOut = 0;
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isOpen &&
        basketRef.current &&
        !basketRef.current.contains(event.target as Node)
      ) {
        timeOut = setTimeout(() => {
          setIsOpen(false);
        }, 100);
      }
    };

    isOpen
      ? document.body.addEventListener("mousedown", handleClickOutside)
      : document.body.removeEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.body.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeOut);
    };
  });

  return (
    <div
      className="absolute left-1/2 top-28 z-20 h-64 w-[360px] translate-x-[-50%] rounded-lg bg-white p-6 shadow-2xl md:left-auto md:top-20 md:translate-x-0"
      ref={basketRef}
    >
      <p className="font-bold">Cart</p>
      <div className="absolute left-0 top-16 w-full border-b-[1px]"></div>
      <p className="absolute left-1/2 top-36 translate-x-[-50%] text-center font-bold text-paleSky">
        Your cart is empty.
      </p>
    </div>
  );
};
