import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const MainContainer: React.FC = () => {
  return (
    <div className="md:ml-12">
      <LeftSide />
      <RightSide />
    </div>
  );
};
