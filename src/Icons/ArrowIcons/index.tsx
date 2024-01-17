type ArrowType = {
  kind: "left" | "right";
};

const Component: React.FC<ArrowType> = ({ kind }) => {
  return (
    <svg
      width="12"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={kind === "left" ? "M11 1 3 9l8 8" : "m2 1 8 8-8 8"}
        stroke="#1D2026"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Component;
