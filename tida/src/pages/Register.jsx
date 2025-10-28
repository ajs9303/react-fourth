import { useState } from "react";
import Form from "../molecules/Form";
import Button from "../atom/Button";

export default function Register() {
  const [isValidAll, setIsValidAll] = useState({
    id: false,
    password: false,
    email: false,
  });

  const dataSet = {
    id: {
      placeholder: "아이디를 입력해 주세요",
      validations: [
        { label: "영문/숫자", test: (v) => /^[a-zA-Z0-9]+$/.test(v) },
        { label: "6~20자 내외", test: (v) => v.length >= 6 && v.length <= 20 },
      ],
    },
    password: {
      placeholder: "비밀번호를 입력해 주세요",
      validations: [
        { label: "영문", test: (v) => /[a-zA-Z]/.test(v) },
        { label: "숫자", test: (v) => /\d/.test(v) },
        {
          label: "특수문자(!@$%^*_+~)",
          test: (v) => /[!@\$%\^*\_\+\~]/.test(v),
        },
        { label: "8~20자 내외", test: (v) => v.length >= 8 && v.length <= 20 },
      ],
    },
    email: {
      placeholder: "이메일을 입력해 주세요",
      validations: [
        {
          label: "이메일 형식",
          test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        },
      ],
    },
  };

  const handleValidChange = (key, value) => {
    // setIsValidAll((prev) => ({ ...prev, [key]: value }));
  };

  const isAllPassed = Object.values(isValidAll).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAllPassed) alert("회원가입 완료!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col gap-5"
    >
      {Object.entries(dataSet).map(([key, data]) => (
        <Form
          key={key}
          {...data}
          onValidChange={(v) => handleValidChange(key, v)}
        />
      ))}

      <Button contents="회원가입" isActive={isAllPassed} />
    </form>
  );
}
