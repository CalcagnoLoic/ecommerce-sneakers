import MINUS_ICON from "../../public/assets/img/icon-minus.svg";
import PLUS_ICON from "../../public/assets/img/icon-plus.svg";
import CART_ICON from "../../public/assets/img/icon-cart-button.svg";

export const ProductDescription: React.FC = () => {
  return (
    <div className="mx-6 mt-6 md:mx-0 lg:ml-24 lg:mt-14">
      <h2 className="text-xs font-bold uppercase tracking-widest text-pumpkin">
        sneaker company
      </h2>
      <h1 className="mt-7 text-4xl capitalize">
        fall limited edition sneakers
      </h1>
      <p className="mt-8 break-words text-base text-paleSky md:w-[445px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="mt-6 flex justify-between md:flex-col">
        <div className="flex">
          <p className="mr-4 self-center text-3xl font-bold">$125.00</p>
          <div className="self-center rounded-xl bg-peachCream px-3 py-2">
            <span className=" text-pumpkin">50%</span>
          </div>
        </div>
        <p className="self-center text-base text-cadetBlue line-through md:self-start lg:mt-3">
          $250.00
        </p>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="flex justify-between rounded-xl bg-linkWater p-3 px-5 lg:w-[200px]">
          <img
            src={MINUS_ICON}
            alt="minus icon to drop into cart"
            className="icon-to-cart"
          />
          <p className="self-center px-3">0</p>
          <img
            src={PLUS_ICON}
            alt="plus icon to add into cart"
            className="icon-to-cart"
          />
        </div>

        <div className="mt-4 flex cursor-pointer justify-center rounded-xl bg-pumpkin p-3 px-5 shadow-2xl md:shadow-none shadow-pumpkin lg:ml-2 lg:mt-0 lg:w-full">
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
    </div>
  );
};
