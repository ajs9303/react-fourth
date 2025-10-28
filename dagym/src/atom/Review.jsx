import Icon from "./Icon";
import Span from "./Span";

const Review = (props) => {
  console.log(props);

  return (
    <div className="flex flex-row items-center gap-1 text-sm">
      <Icon shape={"Star"} />
      <Span
        contents={`${props.review.rate.toFixed(1)} (${props.review.count})`}
      ></Span>
    </div>
  );
};

export default Review;
