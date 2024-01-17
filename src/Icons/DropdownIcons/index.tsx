type DropdownIconsProps = {
  isOpen: boolean;
};

const Component: React.FC<DropdownIconsProps> = ({ isOpen }) => {
  return (
    <svg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-menu"
    >
      <path
        d={
          isOpen
            ? "m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            : "M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        }
        fill="#69707D"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Component;
