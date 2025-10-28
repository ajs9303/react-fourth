const Button = ({ contents, isActive }) => {
  return (
    <button
      className={`w-full py-2 rounded-2xl font-bold transition-colors ${
        isActive
          ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      {contents}
    </button>
  );
};

export default Button;
