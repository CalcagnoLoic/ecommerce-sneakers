import { description } from "../../data";

import ButtonAddToCart from "../../components/Button";
import CompanyName from "../../components/CustomText";
import Counter from "../../components/Counter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PriceReduction from "../../components/Product/PriceReduction";
import PriceWrapper from "../../Layout/PriceWrapper";
import ProductDescription from "../../components/Product/ProductDescription";
import ProductPrice from "../../components/Product/ProductPrice";
import ProductTitle from "../../components/Product/ProductTitle";
import Wrapper from "../../Layout/ProductDescriptionWrapper";


function Page() {
  return (
    <div className="md:mx-32 lg:mx-24 xl:mx-40">
      <Header />
      <div className="main-content-wrapper">
        <div className="product-wrapper">
          <div className="flex-col">
            <Wrapper>
              <CompanyName
                tag="h2"
                text="sneakers company"
                classname="company-name-text"
              />
              <ProductTitle name="fall limited edition sneakers" />
              <ProductDescription name={description} />

              <PriceWrapper>
                <div className="flex">
                  <ProductPrice price={"$125.00"} />

                  <PriceReduction name="50%" />
                </div>
                <ProductPrice isOnSale={true} price={"$250.00"} />
              </PriceWrapper>

              <div className="mt-8 flex flex-col lg:flex-row">
                <Counter />

                <ButtonAddToCart />
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
