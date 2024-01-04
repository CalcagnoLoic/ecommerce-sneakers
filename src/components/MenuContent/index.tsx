import { NavBar } from "../../types/types";

import NavItemWrapper from "../../Layout/NavItemWrapper";
import NavItem from "../NavItem";

const namesItems: NavBar[] = [
  { content: "Collection", href: "#", id: 1  },
  { content: "Men", href: "#", id: 2  },
  { content: "Women", href: "#", id: 3  },
  { content: "About", href: "#", id: 4  },
  { content: "Contact", href: "#", id: 5  },

];

const Component: React.FC = () => (
  <NavItemWrapper isDropdown={false}>
    {namesItems.map((item) => (
      <NavItem content={item.content} href={item.href} id={item.id} />
    ))}
  </NavItemWrapper>
);

export default Component;
