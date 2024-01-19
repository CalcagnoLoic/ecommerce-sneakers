import { namesItems } from "../../data";

import NavItem from "../NavItem";
import NavItemLayout from "../../layouts/NavItemLayout";

const Component = () => (
  <NavItemLayout css="nav-item-content">
    {namesItems.map((item) => (
      <NavItem
        content={item.content}
        href={item.href}
        classname="link-nav"
        key={item.key}
        id={item.id}
      />
    ))}
  </NavItemLayout>
);

export default Component;
