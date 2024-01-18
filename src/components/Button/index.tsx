import BasketIcons from "../../Icons/BasketIcons";

//import { BasketContext } from "../../context/Basket/Basket";
//import { useContext } from "react";
import { productItems } from "../../data";

const Component = () => {
  //const { addToBasket } = useContext(BasketContext);

  return (
    <div className="button-wrapper">
      <BasketIcons color="light" css="icon-to-cart mr-5" />
      <button onClick={() => console.log(productItems)} className="button-text">
        Add to Cart
      </button>
    </div>
  );
};
export default Component;
