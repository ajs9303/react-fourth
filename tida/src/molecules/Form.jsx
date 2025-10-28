import { useState } from "react";
import Input from "../atom/Input";
import Validation from "../atom/Validation";

const Form = (props) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col p-2 gap-2.5">
      <Input {...props} onChange={(e) => setValue((prev) => e.target.value)} />
      <div className="flex items-center gap-2.5">
        {props.validations.map((v) => (
          <Validation contents={v} />
        ))}
      </div>
    </div>
  );
};

export default Form;
