import Basket from "../Basket";
import CUSTOMER_PROFILE from "/assets/img/customer-profile.png";
import DropdownMenu from "../Dropdown/DropdownMenu";
import HeaderWrapper from "../../Layout/HeaderWrapper";
import NavBarContent from "../NavBarContent";

const Component = () => (
  <HeaderWrapper>
    <nav className="flex justify-between md:my-6 lg:my-0">
      <section className="flex self-center">
        <DropdownMenu />

        <NavBarContent />
      </section>

      <section className="self-center">
        <div className="flex items-center justify-end">
          <Basket />
          <img
            src={CUSTOMER_PROFILE}
            alt="Customer profile"
            className="icon-username"
          />
        </div>
      </section>
    </nav>
  </HeaderWrapper>
);

export default Component;
