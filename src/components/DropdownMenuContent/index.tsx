import { NavBar, dropdownProps } from "../../types/types";

import NavItemWrapper from "../../Layout/NavItemWrapper";
import DropdownMenuContentWrapper from "../../Layout/DropdownMenuContent";
import NavItem from "../../components/NavItem";

const namesItems: NavBar[] = [
  { id: 1, content: "Collection", href: "#" },
  { id: 2, content: "Men", href: "#" },
  { id: 3, content: "Women", href: "#" },
  { id: 4, content: "About", href: "#" },
  { id: 5, content: "Contact", href: "#" },
];

const Component: React.FC<dropdownProps> = ({
  isOpen,
  ref,
}: {
  isOpen: boolean;
  ref: React.RefObject<HTMLDivElement>;
}) => (
  <DropdownMenuContentWrapper isOpen={isOpen}>
    <div className="wrapper-navbar w-screen bg-black opacity-80"></div>
    <NavItemWrapper isDropdown={true} ref={ref}>
      {/* react.forwarded ?? creuser pour le passage de props */}
      {namesItems.map((item: NavBar) => (
        <NavItem content={item.content} href={item.href} id={item.id} />
      ))}
    </NavItemWrapper>
  </DropdownMenuContentWrapper>
);

export default Component;
