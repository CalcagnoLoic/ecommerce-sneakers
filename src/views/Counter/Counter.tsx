import { useState } from "react";

import MINUS_ICON from "../../../public/assets/img/icon-minus.svg";
import PLUS_ICON from "../../../public/assets/img/icon-plus.svg";

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter(counter + 1);
  };

  const decrement: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={decrement}>
        <img
          src={MINUS_ICON}
          alt="minus icon to drop into cart"
          className="icon-to-cart"
        />
      </button>

      <p className="self-center px-3">{counter}</p>
      <button onClick={increment}>
        <img
          src={PLUS_ICON}
          alt="plus icon to add into cart"
          className="icon-to-cart"
        />
      </button>
    </>
  );
};
