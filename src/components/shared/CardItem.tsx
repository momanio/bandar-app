import React from "react";
import uploadImage from "assets/icons/Rectangle 209.png";
import edit from "assets/icons/edit-2.svg";
import playCircle from "assets/icons/play-circle.svg";

import { ReactSVG } from "react-svg";

const CardItem = ({
  isFood = false,
  isVitamin = false,
  isNutritionalSupplements = false,
  isTraining = false,
}: {
  isFood?: boolean;
  isVitamin?: boolean;
  isNutritionalSupplements?: boolean;
  isTraining?: boolean;
}) => {
  return (
    <div className="flex flex-col bg-black-1000 rounded-3xl w-[18.8rem] h-[25.688rem]">
      <div className="px-2 pt-2">
        {isTraining ? (
          <div className="relative group">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#FFFFFF99] rounded-t-3xl rounded-br-0 rounded-bl-3xl">
              <ReactSVG src={playCircle} />
            </div>
            <img
              src={uploadImage}
              alt="food"
              className="object-fill rounded-t-3xl rounded-br-0 rounded-bl-3xl"
            />
          </div>
        ) : (
          <img
            src={uploadImage}
            alt="food"
            className="object-fill rounded-t-3xl rounded-br-0 rounded-bl-3xl"
          />
        )}
        <div className="flex justify-between pt-2">
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white">
              رز ابيض - بعد الطبخ
            </span>
            {!isTraining && (
              <span className="text-sm font-medium text-black-500">جرام</span>
            )}
          </div>
          {!isVitamin && !isTraining && (
            <div className="flex items-center justify-center px-2.5 border border-[#333638] rounded-lg h-fit py-1">
              <span className="text-xs font-medium text-black-500">جرام</span>
            </div>
          )}
        </div>
        {isFood && (
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
              <span className="font-normal text-xs text-black-400">
                بروتين{" "}
              </span>
            </div>
          </div>
        )}
        {isNutritionalSupplements && (
          <div className="flex flex-col w-full items-center border border-[#333638] rounded-[0.938rem] py-1.5 mt-3.5">
            <span className="font-bold text-xs text-white">35</span>
            <span className="font-normal text-xs text-black-400">
              سعرة حرارية
            </span>
          </div>
        )}
        {isVitamin && (
          <div className="flex flex-col w-full items-center border border-[#333638] rounded-[0.938rem] py-3.5 mt-3.5">
            <span className="font-normal text-xs text-black-400">حبة</span>
          </div>
        )}
        {isTraining && (
          <div className="flex justify-between gap-3.5 pt-3.5">
            <div className="flex flex-col w-1/2 items-center border border-[#333638] rounded-[0.938rem] py-1.5">
              <span className="font-bold text-xs text-white">ارجل</span>
              <span className="font-normal text-xs text-black-400">
                فئة التمرين
              </span>
            </div>
            <div className="flex flex-col w-1/2 items-center border border-[#333638] rounded-[0.938rem] py-1.5">
              <span className="font-bold text-xs text-white">اجهزة</span>
              <span className="font-normal text-xs text-black-400">
                نمط التمرين
              </span>
            </div>
          </div>
        )}
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

export default CardItem;
