import { Check } from "lucide-react";

const Validation = ({ isValid = false, contents }) => {
  const colorClass = isValid ? "text-green-500" : "text-gray-300";

  return (
    <div className="flex items-center gap-1 text-sm">
      <Check className={colorClass} />
      <span className={isValid ? "text-green-500" : "text-gray-400"}>
        {contents}
      </span>
    </div>
  );
};

export default Validation;
