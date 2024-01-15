import DropdownIcons from "../../../Icons/DropdownIcons";
import DropdownMenuIconWrapper from "../../../Layout/DropdownMenuIconWrapper";
import LogoIcon from "../../../Icons/LogoIcon";

type dropdownPropsIcon = {
  isOpen: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Component: React.FC<dropdownPropsIcon> = ({ isOpen, handleClick }) => (
  <DropdownMenuIconWrapper>
    <button onClick={handleClick}>
      <DropdownIcons isOpen={isOpen} />
    </button>

    <LogoIcon />
  </DropdownMenuIconWrapper>
);

export default Component;
