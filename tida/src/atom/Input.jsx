const Input = ({ placeholder, onChange }) => {
  return (
    <div className="w-full border border-gray-300 rounded-md p-2 focus-within:border-blue-400 transition-colors">
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
