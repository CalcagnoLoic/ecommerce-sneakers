import { namesItems } from "../../data";

import NavItemWrapper from "../../Layout/NavItemWrapper";
import NavItem from "../Link";

const Component: React.FC = () => (
  <NavItemWrapper isDropdown={false}>
    {namesItems.map((item) => (
      <NavItem
        content={item.content}
        href={item.href}
        classname="link-nav"
        key={item.key}
        id={item.id}
      />
    ))}
  </NavItemWrapper>
);

export default Component;
