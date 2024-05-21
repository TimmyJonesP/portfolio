interface MeProps {
  hobby: string;
}

export const Me: React.FC<MeProps> = ({ hobby }) => {
  return (
    <div className="inline-block sm:inline-block ml-1 my-2">
      <div className="flex items-center">
        <div className="ml-5 circle bg-gray-600 rounded-full h-8 w-8 flex items-center justify-center mr-2"></div>
        <span className=" font-medium text-black text-[20px] md:text-[2vw] uppercase">
          {hobby}
        </span>
      </div>
    </div>
  );
};
