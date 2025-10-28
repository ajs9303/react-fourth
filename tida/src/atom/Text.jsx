const Text = ({ className, contents }) => {
  return (
    <div>
      <span className={className}>{contents}</span>
    </div>
  );
};

export default Text;
