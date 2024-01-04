import { dropdownPropsIcon } from "../../types/types";

import DropdownMenuIconWrapper from "../../Layout/DropdownMenuIconWrapper";
import IconLogo from "../IconContent";
import IconMenuDropdown from "../IconContent";

import MENU_ICON from "/assets/img/icon-menu.svg";
import MENU_ICON_CLOSE from "/assets/img/icon-close.svg";
import LOGO from "/assets/img/logo.svg";

const Component: React.FC<dropdownPropsIcon> = ({
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
