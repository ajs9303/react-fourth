import { useState, useEffect } from "react";
import Input from "../atom/Input";
import Validation from "../atom/Validation";

const Form = ({ placeholder, validations, onValidChange }) => {
  const [value, setValue] = useState("");

  // value 변화 시 검증 상태 계산
  const validState = validations.map((v) => v.test(value));

  useEffect(() => {
    const allPassed = validations.every((v) => v.test(value));
    onValidChange?.(allPassed);
  }, [value, validations, onValidChange]);

  return (
    <div className="flex flex-col p-4 gap-3 bg-white rounded-lg shadow-md">
      <Input
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        {validations.map((v, i) => (
          <Validation key={i} contents={v.label} isValid={validState[i]} />
        ))}
      </div>
    </div>
  );
};

export default Form;
