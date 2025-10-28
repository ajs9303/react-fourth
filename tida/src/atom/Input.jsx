const Input = ({ placeholder, onChange }) => {
  return (
    <div className="w-full border border-slate-200 rounded-sm p-2">
      <input
        className="w-full focus:outline-0"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
