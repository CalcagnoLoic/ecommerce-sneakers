import NavItemWrapper from "../../Layout/NavItemWrapper";
import NavItem from "../../components/NavItem";
import DropdownMenuContentWrapper from "../../Layout/DropdownMenuContent";

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

const Component = ({
  isOpen,
  ref,
}: {
  isOpen: boolean;
  ref: React.LegacyRef<HTMLDivElement>;
}) => (
  <DropdownMenuContentWrapper isOpen={isOpen}>
    <div className="wrapper-navbar w-screen bg-black opacity-80"></div>
    <NavItemWrapper isDropdown={true} ref={ref}> {/* react.forwarded ?? creuser*/}
      {namesItems.map((item: NavBar) => (
        <NavItem content={item.value} href={item.href} id={item.id} />
      ))}
    </NavItemWrapper>
  </DropdownMenuContentWrapper>
);

export default Component;
