export const BasketModal: React.FC = () => {
  return (
    <div className="absolute top-28 z-20 h-64 w-[360px] rounded-lg bg-white p-6 md:top-20 shadow-2xl">
      <p className="font-bold">Cart</p>
      <div className=" absolute left-0 top-16 w-full border-b-[1px]"></div>
      <p className="absolute left-1/2 top-36 translate-x-[-50%] text-center font-bold text-paleSky">
        Your cart is empty.
      </p>
    </div>
  );
};
