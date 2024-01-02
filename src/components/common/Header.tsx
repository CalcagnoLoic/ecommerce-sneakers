import { MenuContent } from "../../views/Menu/MenuContent.js";
import { DropdownMenu } from "../../views/Menu/DropdownMenu.js";
import { Basket } from "../Basket.js";

import NavItem from "../NavItem"
import Navigation from "../../layouts/Navigation"

type NavItem = {
  content: string;
  href: string;
  id: number;
};

const navItems: NavItem[] = [
  { id: 1, content: "Collection", href: "#" },
  { id: 2, content: "Men", href: "#" },
  { id: 3, content: "Women", href: "#" },
  { id: 4, content: "About", href: "#" },
  { id: 5, content: "Contact", href: "#" },
];


import CUSTOMER_PROFILE from "/assets/img/customer-profile.png";

export const Header: React.FC = () => {
  return (
    <nav className="lg:my-15 my-5 flex items-center">
      <DropdownMenu />

      <Navigation isChrimas={true}>
        {
          navItems.map(item => (
            <NavItem isActive={false} content={item.content} key={item.id} href={item.href}  />
          ))
        }
      </Navigation>

      <div className="flex items-center justify-end">
        <Basket />
        <img
          src={CUSTOMER_PROFILE}
          alt="Customer profile"
          className="h-[24px] w-[24px] cursor-pointer border-white md:h-[50px] md:w-[50px] lg:rounded-full lg:border-2 lg:hover:border-pumpkin"
        />
      </div>
    </nav>
  );
};
