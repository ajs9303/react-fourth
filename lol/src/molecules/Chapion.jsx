import { data } from "../champ";
import Card from "../atom/Card";

const Champion = () => {
  const champions = Object.values(data.data);

  return (
    <div className="container mx-auto grid grid-cols-6 gap-2">
      {champions.map((v) => {
        return <Card key={v.key} src={v.image.full} name={v.name} />;
      })}
    </div>
  );
};

export default Champion;
