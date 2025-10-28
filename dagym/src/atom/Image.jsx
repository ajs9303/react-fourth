const Image = (props) => {
  return (
    <div className="overflow-hidden w-[120px] h-[140px] rounded-[10px] relative">
      <div className="w-full h-full">
        <img
          src={props.gymPhotoSmall}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center absolute top-2 left-2 flex-col gap-1">
        <div className="flex flex-row items-center px-[5px] py-[2px] border-l-gray-400 self-center bg-white rounded-sm shrink-0 overflow-hidden">
          <span className="font-black text-sm text-gray-400 text-center border-none">
            소득공제
          </span>
        </div>
      </div>
    </div>
  );
};

export default Image;
