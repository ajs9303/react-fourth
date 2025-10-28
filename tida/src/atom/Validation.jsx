import { Check } from "lucide-react";
import Text from "./Text";
const Validation = ({ isValid = false, contents }) => {
  const result = isValid ? "text-green-200" : "text-slate-200";

  return (
    <div className="flex items-center gap-0.5">
      <Check className={result} />
      <Text contents={contents} />
    </div>
  );
};

export default Validation;
