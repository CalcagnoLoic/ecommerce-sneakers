import DropdownIcons from "../../../Icons/DropdownIcons";
import LogoIcon from "../../../Icons/LogoIcon";

type dropdownPropsIcon = {
  isOpen: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Component: React.FC<dropdownPropsIcon> = ({ isOpen, handleClick }) => (
  <div className="dropdown-icon-wrapper">
    <button onClick={handleClick}>
      <DropdownIcons isOpen={isOpen} />
    </button>

    <LogoIcon />
  </div>
);

export default Component;
