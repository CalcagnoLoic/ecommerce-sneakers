import { namesItems } from "../../data";

import NavItem from "../Link";

const Component = () => (
  <div className="hidden flex-grow self-center list-none lg:flex">
    {namesItems.map((item) => (
      <NavItem
        content={item.content}
        href={item.href}
        classname="link-nav"
        key={item.key}
        id={item.id}
      />
    ))}
  </div>
);

export default Component;
