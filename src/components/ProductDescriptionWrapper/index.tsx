import Wrapper from "../../Layout/ProductDescriptionWrapper/index.tsx";
import PriceWrapper from "../../Layout/PriceWrapper/index.tsx";

import CompanyName from "../CompanyName/index.tsx";
import ProductTitle from "../ProductTitle/index.tsx";
import ProductDescription from "../ProductDescription/index.tsx";
import ProductPrice from "../ProductPrice/index.tsx";
import PriceReduction from "../PriceReduction/index.tsx";
import ButtonAddToCart from "../Button/index.tsx";
import Counter from "../Counter/index.tsx";

const Component: React.FC = () => {
  const description: string =
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";

  return (
    <Wrapper>
      <CompanyName name={"sneaker company"} />
      <ProductTitle name={"fall limited edition sneakers"} />
      <ProductDescription description={description} />

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
};

export default Component;
