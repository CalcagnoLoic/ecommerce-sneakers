import { MenuContent } from "../../views/Menu/MenuContent/MenuContent.js";
import { DropdownMenu } from "../../views/Menu/DropdownMenu/DropdownMenu.js";

import CART_ICON from "/assets/img/icon-cart.svg"
import CUSTOMER_PROFILE from "/assets/img/customer-profile.png";

export const Header: React.FC = () => {
  return (
    <nav className="lg:my-15 my-5 flex items-center">
      <DropdownMenu />

      <MenuContent />

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
    </nav>
  );
};
