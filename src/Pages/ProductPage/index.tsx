import { description } from "../../data";

import Button from "../../components/Button";
import Counter from "../../components/Counter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PriceReduction from "../../components/Product/ProductReduction";
import PriceWrapper from "../../Layout/PriceWrapper";
import ProductOverview from "../../components/Product/ProductOverview";
import ProductPrice from "../../components/Product/ProductPrice";
import Wrapper from "../../Layout/ProductDescriptionWrapper";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

function Page() {
  return (
    <div className="md:mx-32 lg:mx-24 xl:mx-40">
      <Header />
      <div className="main-content-wrapper">
        <section className="product-wrapper">
          <div className="flex-col">
            <ProductOverview />
          </div>

          <Wrapper>
            <Heading
              kind="h2"
              content="sneakers company"
              css="text-xs font-bold uppercase tracking-widest text-pumpkin"
            />
            <Heading
              kind="h1"
              content="fall limited edition sneakers"
              css="mt-7 text-4xl capitalize"
            />
            <Paragraph
              kind="p"
              content={description}
              css="mt-8 break-words text-base text-paleSky md:w-[445px]"
            />

            <PriceWrapper>
              <div className="flex">
                <ProductPrice price={"$125.00"} />

                <PriceReduction content="50%" />
              </div>
              <ProductPrice isOnSale={true} price={"$250.00"} />
            </PriceWrapper>

            <div className="mt-8 flex flex-col lg:flex-row">
              <Counter />
              <Button />
            </div>
          </Wrapper>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
