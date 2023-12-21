import MENU_ICON from "../../../public/assets/img/icon-menu.svg";
import LOGO from "../../../public/assets/img/logo.svg";
import CART_ICON from "../../../public/assets/img/icon-cart.svg";
import CUSTOMER_PROFILE from "../../../public/assets/img/customer-profile.png";

export const Header: React.FC = () => {
  return (
    <div className="my-5 flex items-center lg:my-15">
      <div className="flex flex-grow items-center justify-start">
        <img
          src={MENU_ICON}
          alt="Menu"
          className="mr-4 cursor-pointer md:mr-6 lg:hidden"
        />
        <img src={LOGO} alt="E-commerce sneakers" />
      </div>

      <div className="hidden flex-grow self-center lg:flex">
        <a href="#" className="link-nav">
          Collection
        </a>
        <a href="#" className="link-nav">
          Men
        </a>
        <a href="#" className="link-nav">
          Women
        </a>
        <a href="#" className="link-nav">
          About
        </a>
        <a href="#" className="link-nav">
          Contact
        </a>
      </div>

      <div className="flex items-center justify-end">
        <img
          src={CART_ICON}
          alt="Cart"
          className="mr-5 h-[20px] w-[20px] cursor-pointer md:mr-11"
        />
        <img
          src={CUSTOMER_PROFILE}
          alt="Customer profile"
          className="h-[24px] w-[24px] cursor-pointer border-white md:h-[50px] md:w-[50px] lg:rounded-full lg:border-2 lg:hover:border-pumpkin"
        />
      </div>
    </div>
  );
};
