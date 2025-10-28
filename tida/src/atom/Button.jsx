const Button = ({ className, contents }) => {
  return (
    <button
      className={`flex justify-center items-center rounded-3xl font-bold p-2 ${className}`}
    >
      {contents}
    </button>
  );
};

export default Button;
