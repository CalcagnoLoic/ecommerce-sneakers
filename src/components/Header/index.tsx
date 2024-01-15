import Basket from "../Basket";
import CUSTOMER_PROFILE from "/assets/img/customer-profile.png";
import DropdownMenu from "../Dropdown/DropdownMenu";
import HeaderWrapper from "../../Layout/HeaderWrapper";
import NavBarContent from "../NavBarContent";

const Component = () => (
  <HeaderWrapper>
    <nav className="lg:my-15 my-5 flex justify-between">
      <section className="flex gap-16 self-center">
        <DropdownMenu />

        <NavBarContent />
      </section>

      <section>
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
