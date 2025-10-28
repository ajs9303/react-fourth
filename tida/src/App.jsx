import Form from "./molecules/Form";

function App() {
  const dataSet = {
    id: {
      placeholder: "아이디를 입력해 주세요",
      validations: ["영문/숫자", "6~20자 내외"],
    },
    password: {
      placeholder: "비밀번호를 입력해 주세요",
      validations: ["영문", "숫자", "특수문자(!@$%^*_+~)", "8~20자 내외"],
    },
    email: {
      placeholder: "이메일을 입력해 주세요",
      validations: ["이메일 형식"],
    },
  };

  return (
    <>
      <Form {...dataSet.id} />
      <Form {...dataSet.password} />
      <Form {...dataSet.email} />
    </>
  );
}

export default App;
