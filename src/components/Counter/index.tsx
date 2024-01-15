import { useState } from "react";

import CounterWrapper from "../../Layout/CounterWrapper";
import Paragraph from "../../typographies/Paragraph";
import QuantityIcons from "../../Icons/QuantityIcons";

const Component = () => {
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
        <QuantityIcons kind="minus" />
      </button>

      <Paragraph content={counter} css="px-3" />
      
      <button onClick={increment}>
        <QuantityIcons kind="plus" />
      </button>
    </CounterWrapper>
  );
};

export default Component;
