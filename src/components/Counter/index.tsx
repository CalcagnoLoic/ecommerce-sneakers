import Paragraph from "../../typographies/Paragraph";
import QuantityIcons from "../../Icons/QuantityIcons";

interface CounterType {
  onClick: (newValue: string) => void;
  quantity: number;
}

const Component = ({ onClick, quantity }: CounterType) => {
  return (
    <div className="counter-wrapper">
      <button
        onClick={() => {
          onClick("sub");
        }}
      >
        <QuantityIcons kind="minus" />
      </button>

      <Paragraph kind="span" content={quantity} css="px-3" />

      <button
        onClick={() => {
          onClick("add");
        }}
      >
        <QuantityIcons kind="plus" />
      </button>
    </div>
  );
};

export default Component;
