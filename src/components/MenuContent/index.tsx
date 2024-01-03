import Layout from "../../Layout/NavItemWrapper";
import NavItem from "../NavItem";

type NavBar = {
  id: number;
  value: string;
  href: string;
};

const namesItems: NavBar[] = [
  { id: 1, value: "Collection", href: "#" },
  { id: 2, value: "Men", href: "#" },
  { id: 3, value: "Women", href: "#" },
  { id: 4, value: "About", href: "#" },
  { id: 5, value: "Contact", href: "#" },
];

const Component = () => (
  <Layout>
    {namesItems.map((item) => (
      <NavItem content={item.value} href={item.href} id={item.id} />
    ))}
  </Layout>
);

export default Component;
