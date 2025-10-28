import { Heart, Star } from "lucide-react";

const Icon = ({ className, shape }) => {
  let IconComponent;
  let basicClass;

  switch (shape) {
    case "Heart":
      IconComponent = Heart;
      basicClass = "absolute top-0 right-0";
      break;
    case "Star":
      IconComponent = Star;
      basicClass = "text-yellow-400";
      break;
  }

  return <IconComponent className={`${className} ${basicClass}`} />;
};

export default Icon;
