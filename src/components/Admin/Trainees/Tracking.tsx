import React, { useState, useEffect, useRef } from "react";
import UserInfo from "components/shared/UserInfo";
import { BarChart } from "@mui/x-charts/BarChart";
import { ReactSVG } from "react-svg";
import documentIcon from "assets/icons/document-download.svg";
import redEye from "assets/icons/redEye.svg";
import { redirect } from "react-router-dom";
import ShowPicDialog from "./ShowPicDialog";

const Tracking = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateChartWidth = () => {
      if (chartContainerRef.current) {
        const width = chartContainerRef.current.offsetWidth;
        setChartWidth(width);
      }
    };
    updateChartWidth();
    window.addEventListener("resize", updateChartWidth);
    return () => {
      window.removeEventListener("resize", updateChartWidth);
    };
  }, []);

  return (
    <div className="flex gap-[1.563rem] h-full w-full">
      <UserInfo />
      <div
        ref={chartContainerRef}
        className="h-full overflow-y-scroll relative w-4/5 bg-black-1000 rounded-[1.375rem]"
      >
        <div className="absolute py-10 px-[2.8rem] flex flex-col gap-10 ">
          <span className="text-[2.625rem] font-bold text-white">المتابعة</span>
          <div className="flex flex-col gap-6">
            <span className="text-[2rem] font-bold text-black-300">الوزن</span>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [15, 5, 6] },
              ]}
              width={chartWidth - 105}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[2rem] font-bold text-black-300">
              ملف in body
            </span>
            <div className="flex flex-col bg-black-950 rounded-lg">
              <div className="flex justify-between ps-8 pe-[9.5rem] py-4">
                <span className="font-medium text-sm text-black-400">
                  التاريخ
                </span>
                <span className="font-medium text-sm text-black-400">
                  الاجراءات
                </span>
              </div>
              <div className="flex justify-between ps-8 pe-[6.875rem] py-4 even:bg-black-1000 ">
                <span className="font-medium text-sm text-black-50">
                  2024/2/30{" "}
                  <span className="font-medium text-sm text-black-300">
                    ( تاريخ التسجيل )
                  </span>
                </span>
                <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
                  <ReactSVG src={documentIcon} />
                  <span className="font-medium text-sm text-[#FFC9C9]">
                    تحميل الملف
                  </span>
                </div>
              </div>
              <div className="flex justify-between ps-8 pe-[6.875rem] py-4 even:bg-black-1000 ">
                <span className="font-medium text-sm text-black-50">
                  2024/2/30{" "}
                </span>
                <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
                  <ReactSVG src={documentIcon} />
                  <span className="font-medium text-sm text-[#FFC9C9]">
                    تحميل الملف
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[2rem] font-bold text-black-300">
              صور الجسم
            </span>
            <div className="flex flex-col bg-black-950 rounded-lg">
              <div className="flex justify-between ps-8 pe-[7.5rem] py-4">
                <span className="font-medium text-sm text-black-400">
                  التاريخ
                </span>
                <span className="font-medium text-sm text-black-400">
                  الاجراءات
                </span>
              </div>
              <div className="flex justify-between ps-8 pe-[6.875rem] py-4 even:bg-black-1000 ">
                <span className="font-medium text-sm text-black-50">
                  2024/2/30{" "}
                  <span className="font-medium text-sm text-black-300">
                    ( تاريخ التسجيل )
                  </span>
                </span>
                <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
                  <ReactSVG src={redEye} />
                  <span className="font-medium text-sm text-[#FFC9C9]">
                    عرض
                  </span>
                </div>
              </div>
              <div className="flex justify-between ps-8 pe-[6.875rem] py-4 even:bg-black-1000  ">
                <span className="font-medium text-sm text-black-50">
                  2024/2/30{" "}
                </span>
                <div className="flex gap-2 cursor-pointer" onClick={() => {}}>
                  <ShowPicDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
