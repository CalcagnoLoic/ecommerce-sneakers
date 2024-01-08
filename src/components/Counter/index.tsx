import { useState } from "react";

import CounterWrapper from "../../Layout/CounterWrapper";
import IconToCart from "../IconContent";
import CounterValue from "../CustomText";

import MINUS_ICON from "/assets/img/icon-minus.svg";
import PLUS_ICON from "/assets/img/icon-plus.svg";

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

      <CounterValue tag="p" text={counter} classname="self-center px-3" />
      <button onClick={increment}>
        <IconToCart img={PLUS_ICON} classname="icon-to-cart" />
      </button>
    </CounterWrapper>
  );
};

export default Component;
