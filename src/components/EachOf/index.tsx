import { Children } from "react";

const Component = ({ render, of }) => {
  Children.toArray(of.map((item, index) => render(item, index)));
};

export default Component;
