import Span from "./Span";

const Price = (props) => {
  let unit;
  let price;
  switch (props.price.productType) {
    case "count":
      unit = "회";
      price = (props.price.dagymPrice / props.price.count).toLocaleString(
        "ko-KR"
      );
      break;
    case "period":
      unit = "월";
      price = (props.price.dagymPrice / props.price.period).toLocaleString(
        "ko-KR"
      );
      break;
  }

  return (
    <div className="flex flex-row justify-end items-center gap-1">
      <Span contents={`${price}원~/${unit}`} />
    </div>
  );
};

export default Price;
