import Image from "../atom/Image";
import Name from "../atom/Name";

const Card = (props) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-1">
      <Image {...props} />
      <Name {...props} />
    </div>
  );
};

export default Card;
