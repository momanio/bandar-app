import { Pagination } from "@mui/material";
import React from "react";

const ItemHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-8">
      <div className="">filter section</div>
      <div className="h-full relative overflow-y-scroll">
        <div className="flex flex-wrap gap-y-8 gap-x-5 absolute">
          {children}
        </div>
      </div>
      <div className="w-full h-fit flex justify-center ">
        <Pagination
          color="secondary"
          count={4}
          variant="outlined"
          shape="rounded"
          sx={{
            color: "white",
            gap: "0.625rem",
            margin: "0 0.625rem",
          }}
        />
      </div>
    </div>
  );
};

export default ItemHolder;
