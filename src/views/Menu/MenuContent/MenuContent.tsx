import { NavBar } from "../../../types/types";

const names_navbar: NavBar[] = [
  { id: 1, value: "Collection" },
  { id: 2, value: "Men" },
  { id: 3, value: "Women" },
  { id: 4, value: "About" },
  { id: 5, value: "Contact" },
];

export const MenuContent: React.FC = () => {
  return (
    <>
      <div className="hidden flex-grow self-center lg:flex">
        {names_navbar.map((elem: NavBar) => (
          <a href="#" className="link-nav" key={elem.id}>
            {elem.value}
          </a>
        ))}
      </div>
    </>
  );
};
