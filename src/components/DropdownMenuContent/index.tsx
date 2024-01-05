import { v4 as uuidv4 } from "uuid";
import { NavBar, dropdownProps } from "../../types/types";

import NavItemWrapper from "../../Layout/NavItemWrapper";
import DropdownMenuContentWrapper from "../../Layout/DropdownMenuContent";
import NavItem from "../../components/NavItem";

const namesItems: NavBar[] = [
  { content: "Collection", href: "#", id: 1, key: uuidv4() },
  { content: "Men", href: "#", id: 2, key: uuidv4() },
  { content: "Women", href: "#", id: 3, key: uuidv4() },
  { content: "About", href: "#", id: 4, key: uuidv4() },
  { content: "Contact", href: "#", id: 5, key: uuidv4() },
];

const Component: React.FC<dropdownProps> = ({
  isOpen,
  forwardedRef,
}: {
  isOpen: boolean;
  forwardedRef: React.RefObject<HTMLDivElement>;
}) => (
  <DropdownMenuContentWrapper isOpen={isOpen}>
    <div className="wrapper-navbar w-screen bg-black opacity-80"></div>
    <NavItemWrapper isDropdown={true} forwardedRef={forwardedRef}>
      {namesItems.map((item: NavBar) => (
        <NavItem content={item.content} href={item.href} id={item.id} key={item.key} />
      ))}
    </NavItemWrapper>
  </DropdownMenuContentWrapper>
);

export default Component;
