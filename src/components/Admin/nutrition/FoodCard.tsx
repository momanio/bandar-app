import React from "react";
import uploadImage from "assets/icons/Rectangle 209.png";
import edit from "assets/icons/edit-2.svg";

import { ReactSVG } from "react-svg";

const FoodCard = () => {
  return (
    <div className="flex flex-col bg-black-1000 rounded-3xl w-[18.8rem] h-[25.688rem]">
      <div className="px-2 pt-2">
        <img
          src={uploadImage}
          alt="food"
          className="object-fill rounded-t-3xl rounded-br-0 rounded-bl-3xl"
        />
        <div className="flex justify-between pt-2">
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white">
              رز ابيض - بعد الطبخ
            </span>
            <span className="text-sm font-medium text-black-500">جرام</span>
          </div>
          <div className="flex items-center justify-center px-2.5 border border-[#333638] rounded-lg h-fit py-1">
            <span className="text-xs font-medium text-black-500">جرام</span>
          </div>
        </div>
        <div className="flex justify-between gap-3.5 pt-3.5">
          <div className="flex flex-col w-1/3 items-center border border-[#333638] rounded-[0.938rem] py-1.5">
            <span className="font-bold text-xs text-white">35</span>
            <span className="font-normal text-xs text-black-400">
              سعرة حرارية
            </span>
          </div>
          <div className="flex flex-col w-1/3 items-center border border-[#333638] rounded-[0.938rem] py-1.5">
            <span className="font-bold text-xs text-white">35</span>
            <span className="font-normal text-xs text-black-400">
              كربوهيدرات
            </span>
          </div>
          <div className="flex flex-col w-1/3 items-center border border-[#333638] rounded-[0.938rem] py-1.5">
            <span className="font-bold text-xs text-white">35</span>
            <span className="font-normal text-xs text-black-400">بروتين </span>
          </div>
        </div>
      </div>
      <div className="flex border border-x-0 border-t border-b-0 border-[#333638] mt-[1.125rem] h-full ">
        <div
          onClick={() => {}}
          className="cursor-pointer hover:bg-black-700 w-full flex gap-4 justify-center items-center border-l border-r-0 border-y-0 rounded-br-3xl border-[#333638]"
        >
          <ReactSVG src={edit} />
          <span className="font-medium text-base text-white">تعديل</span>
        </div>
        <div
          onClick={() => {}}
          className="cursor-pointer hover:bg-black-700 flex justify-center items-center w-full font-medium text-base text-green-400 rounded-bl-3xl"
        >
          تفعيل
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
