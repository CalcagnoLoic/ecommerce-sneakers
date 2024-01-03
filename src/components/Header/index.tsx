import HeaderWrapper from "../../Layout/HeaderWrapper/index.js";

import Basket from "../Basket/index.js";
import CustomerProfile from "../IconContent/index.js";
import MenuContent from "../MenuContent/index.js";
import DropdownMenu from "../DropdownMenu/index.js";

import CUSTOMER_PROFILE from "/assets/img/customer-profile.png";

const Component = () => (
  <HeaderWrapper>
    <nav className="lg:my-15 my-5 flex items-center">
      <DropdownMenu />

      <MenuContent />

      <div className="flex items-center justify-end">
        <Basket />
        <CustomerProfile img={CUSTOMER_PROFILE} classname="icon-username" />
      </div>
    </nav>
  </HeaderWrapper>
);

export default Component;
