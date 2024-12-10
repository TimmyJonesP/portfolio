interface MeProps {
  hobby: string;
}

export const Me: React.FC<MeProps> = ({ hobby }) => {
  return (
    <div className="inline-block sm:inline-block ml-1 my-2">
      <div className="flex items-center">
        <span className=" font-medium text-black text-[25px] md:text-[2vw] uppercase">
          {hobby}
        </span>
      </div>
    </div>
  );
};
