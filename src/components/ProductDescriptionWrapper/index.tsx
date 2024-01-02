import { Counter } from "../../views/Counter/Counter.tsx";
import CART_ICON from "/assets/img/icon-cart-button.svg";
import Wrapper from "../../Layout/ProductDescriptionWrapper/index.tsx";
import CompanyName from "../CompanyName/index.tsx";
import ProductTitle from "../ProductTitle/index.tsx";
import ProductDescription from "../ProductDescription/index.tsx";

export const ProductDescriptionWrapper: React.FC = () => {
  const description: String =
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";

  return (
    <Wrapper>
      <CompanyName name={"sneaker company"} />
      <ProductTitle name={"fall limited edition sneakers"} />
      <ProductDescription description={description} />

      <div className="mt-6 flex justify-between md:flex-col">
        {" "}
        //Layout
        <div className="flex">
          <p className="mr-4 self-center text-3xl font-bold">$125.00</p>{" "}
          //PriceComp
          <div className="self-center rounded-xl bg-peachCream px-3 py-2">
            {" "}
            //Layout
            <span className=" text-pumpkin">50%</span> //SoldeComp
          </div>
        </div>
        <p className="self-center text-base text-cadetBlue line-through md:self-start lg:mt-3">
          {" "}
          //PriceCompBis $250.00
        </p>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="flex justify-between rounded-xl bg-linkWater p-3 px-5 lg:w-[200px]">
          <Counter />
        </div>

        <div className="mt-4 flex cursor-pointer justify-center rounded-xl bg-pumpkin p-3 px-5 shadow-2xl shadow-pumpkin hover:bg-atomicTangerine md:shadow-none lg:ml-2 lg:mt-0 lg:w-full">
          <img
            src={CART_ICON}
            alt="icon to add to cart"
            className="icon-to-cart mr-5"
          />
          <div className="">
            <p className="self-center text-white ">Add to cart</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
