import Price from "../atom/Price";
import Review from "../atom/Review";
import Span from "../atom/Span";

const TextBox = (props) => {
  const result = props.tags.join(" / ");

  return (
    <>
      <div>
        <div className="flex flex-col">
          <Span
            contents={result}
            className={"text-sm font-bold whitespace-pre-line text-gray-400"}
          />
          <Span contents={props.gymName} className={"text-lg font-bold"} />
          <Span contents={props.address} className={"text-sm font-normal"} />
          <Review {...props} />
        </div>
        <Price {...props} />
      </div>
    </>
  );
};

export default TextBox;
