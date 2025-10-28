import Image from "../atom/Image";
import TextBox from "./TextBox";

const Card = (props) => {
  return (
    <div className="flex flex-row w-full gap-3 items-center">
      <Image {...props} />
      <TextBox {...props} />
    </div>
  );
};

export default Card;
