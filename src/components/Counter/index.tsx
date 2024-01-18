import { useState } from "react";

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
    <div className="counter-wrapper">
      <button onClick={decrement}>
        <QuantityIcons kind="minus" />
      </button>

      <Paragraph kind="span" content={counter} css="px-3" />
      
      <button onClick={increment}>
        <QuantityIcons kind="plus" />
      </button>
    </div>
  );
};

export default Component;
