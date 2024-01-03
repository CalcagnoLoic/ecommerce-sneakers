import PriceReductionWrapper from "../../Layout/PriceReductionWrapper";

const Component = ({ name }: { name: string }) => (
  <PriceReductionWrapper>
    <span className=" text-pumpkin">{name}</span>
  </PriceReductionWrapper>
);

export default Component;
