import { v4 as uuidv4 } from "uuid";
import { NavBar } from "../../types/types";

import NavItemWrapper from "../../Layout/NavItemWrapper";
import NavItem from "../NavItem";

const namesItems: NavBar[] = [
  { content: "Collection", href: "#", id: 1, key: uuidv4() },
  { content: "Men", href: "#", id: 2, key: uuidv4() },
  { content: "Women", href: "#", id: 3, key: uuidv4() },
  { content: "About", href: "#", id: 4, key: uuidv4() },
  { content: "Contact", href: "#", id: 5, key: uuidv4() },
];

const Component: React.FC = () => (
  <NavItemWrapper isDropdown={false}>
    {namesItems.map((item) => (
      <NavItem
        content={item.content}
        href={item.href}
        key={item.key}
        id={item.id}
      />
    ))}
  </NavItemWrapper>
);

export default Component;
