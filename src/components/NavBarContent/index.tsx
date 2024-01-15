import { namesItems } from "../../data";

import NavItem from "../Link";
import NavItemWrapper from "../../Layout/NavItemWrapper";

const Component = () => (
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
