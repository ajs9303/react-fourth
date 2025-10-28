const Image = ({ src }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${src}`}
        alt=""
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
  );
};

export default Image;
