import { useState } from "react";

import MINUS_ICON from "/assets/img/icon-minus.svg";
import PLUS_ICON from "/assets/img/icon-plus.svg";

import IconToCart from "../IconContent";
import CounterWrapper from "../../Layout/CounterWrapper";

const Component: React.FC = () => {
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
    <CounterWrapper>
      <button onClick={decrement}>
        <IconToCart img={MINUS_ICON} classname="icon-to-cart" />
      </button>

      <p className="self-center px-3">{counter}</p>
      <button onClick={increment}>
        <IconToCart img={PLUS_ICON} classname="icon-to-cart" />
      </button>
    </CounterWrapper>
  );
};

export default Component;
