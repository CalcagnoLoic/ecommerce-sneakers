import { description } from "../../../data/index.ts";

import Wrapper from "../../../Layout/ProductDescriptionWrapper/index.tsx";
import PriceWrapper from "../../../Layout/PriceWrapper/index.tsx";

import ProductTitle from "../ProductTitle/index.tsx";
import ProductDescription from "../ProductDescription/index.tsx";
import ProductPrice from "../ProductPrice/index.tsx";
import PriceReduction from "../PriceReduction/index.tsx";
import ButtonAddToCart from "../../Button/index.tsx";
import Counter from "../../Counter/index.tsx";
import CompanyName from "../../Text/index.tsx";

const Component: React.FC = () => (
  <Wrapper>
    <CompanyName
      tag="h2"
      text="sneakers company"
      classname="company-name-text"
    />
    <ProductTitle name={"fall limited edition sneakers"} />
    <ProductDescription name={description} />

    <PriceWrapper>
      <div className="flex">
        <ProductPrice isOnSale={false} price={"$125.00"} />

        <PriceReduction name="50%" />
      </div>
      <ProductPrice isOnSale={true} price={"$250.00"} />
    </PriceWrapper>

    <div className="mt-8 flex flex-col lg:flex-row">
      <Counter />

      <ButtonAddToCart />
    </div>
  </Wrapper>
);

export default Component;
