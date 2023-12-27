import { names_navbar, NavBar } from "../../../data/data.js";

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
