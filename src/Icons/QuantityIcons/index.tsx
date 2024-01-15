type QuantityIconsProps = {
  kind: "plus" | "minus";
};

const Component: React.FC<QuantityIconsProps> = ({ kind }) => {
  return (
    <svg
      width="12"
      height={kind === "plus" ? "12" : "4"}
      xmlns="http://www.w3.org/2000/svg"
      className="icon-to-cart"
    >
      <defs>
        <path
          d={
            kind === "plus"
              ? "M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              : "M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          }
          id={kind === "plus" ? "b" : "a"}
        />
      </defs>
      <use
        fill="#FF7E1B"
        fill-rule="nonzero"
        xlinkHref={kind === "plus" ? "#b" : "#a"}
      />
    </svg>
  );
};

export default Component;
