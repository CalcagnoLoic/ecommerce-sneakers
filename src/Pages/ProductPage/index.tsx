import { description } from "../../data";

import AddToCart from "../../container/AddToCart";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContentLayout from "../../layouts/MainContentLayout";
import PriceReduction from "../../components/Product/ProductReduction";
import ProductOverview from "../../components/Product/ProductOverview";
import ProductPrice from "../../components/Product/ProductPrice";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import ProductLayout from "../../layouts/ProductLayout";

const Page = () => {
  return (
    <div className="md:mx-32 lg:mx-24 xl:mx-40">
      <Header />
      <MainContentLayout>
        <ProductLayout>
          <div className="flex-col">
            <ProductOverview />
          </div>

          <div className="product-description-wrapper">
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

            <div className="price-wrapper">
              <div className="flex">
                <ProductPrice price={"$125.00"} />

                <PriceReduction content="50%" />
              </div>
              <ProductPrice isOnSale={true} price={"$250.00"} />
            </div>

            <AddToCart />
          </div>
        </ProductLayout>
      </MainContentLayout>
      <Footer />
    </div>
  );
}

export default Page;
