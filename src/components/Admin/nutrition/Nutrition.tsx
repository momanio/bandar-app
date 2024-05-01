import apple from "assets/icons/apple.svg";
import vitamin from "assets/icons/boxvitamin.svg";
import painkiller from "assets/icons/painkiller.svg";
import Title from "components/shared/Title";

import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Nutrition = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col gap-[3.125rem]">
      <Title>التغذية</Title>
      <div className="flex flex-col p-5 gap-3 xl:gap-5 xl:flex-row bg-black-1000 h-full rounded-[1.688rem]">
        <div
          onClick={() => {
            navigate("/admin/dashboard/food-items");
          }}
          className="cursor-pointer hover:bg-black-500 xl:w-1/3 xl:h-full h-1/3 rounded-[1.938rem] border border-[#333638] flex flex-col  gap-2 xl:gap-6 justify-center items-center"
        >
          <ReactSVG src={apple} />
          <span className="font-bold xl:text-[2rem] text-lg text-white">
            الأصناف الغذائية
          </span>
          <span className="font-bold xl:text-2xl text-sm text-white">252</span>
        </div>
        <div
          onClick={() => {
            navigate("/admin/dashboard/nutritional-supplements");
          }}
          className="cursor-pointer hover:bg-black-500 xl:w-1/3 h-1/3 xl:h-full rounded-[1.938rem] border border-[#333638] flex flex-col gap-2 xl:gap-6 justify-center items-center"
        >
          <ReactSVG src={painkiller} />
          <span className="font-bold xl:text-[2rem] text-lg text-white">
            المكملات الغذائية
          </span>
          <span className="font-bold xl:text-2xl text-sm text-white">13</span>
        </div>
        <div
          onClick={() => {
            navigate("/admin/dashboard/vitamins");
          }}
          className="cursor-pointer hover:bg-black-500 xl:w-1/3 h-1/3  xl:h-full rounded-[1.938rem] border border-[#333638] flex flex-col gap-2 xl:gap-6 justify-center items-center"
        >
          <ReactSVG src={vitamin} />
          <span className="font-bold xl:text-[2rem] text-lg text-white">
            فيتامينات
          </span>
          <span className="font-bold xl:text-2xl text-sm text-white">31</span>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
