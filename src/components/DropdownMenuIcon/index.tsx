import IconLogo from "../IconContent";
import IconMenuDropdown from "../IconContent";
import DropdownMenuIconWrapper from "../../Layout/DropdownMenuIconWrapper";

import MENU_ICON from "/assets/img/icon-menu.svg";
import MENU_ICON_CLOSE from "/assets/img/icon-close.svg";
import LOGO from "/assets/img/logo.svg";

const Component = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => (
  <DropdownMenuIconWrapper>
    <button onClick={handleClick}>
      <IconMenuDropdown
        img={`${isOpen ? MENU_ICON_CLOSE : MENU_ICON}`}
        classname="icon-menu"
      />
    </button>

    <IconLogo img={LOGO} />
  </DropdownMenuIconWrapper>
);

export default Component;
