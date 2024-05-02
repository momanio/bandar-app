import { ReactSVG } from "react-svg";
import emptyBox from "assets/icons/emptyBox.svg";
import addCircle from "assets/icons/add-circle.svg";

import { Button } from "@mui/material";

const NoData = ({
  title,
  subTitle,
  buttonText,
  buttonHandler,
}: {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonHandler: () => void;
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-5 rounded-[1.688rem] bg-black-1000">
      <ReactSVG src={emptyBox} />
      <div className="flex flex-col gap-3">
        <span className="text-2xl font-bold text-white">{title}</span>
        <span className="text-base font-normal text-black-400">{subTitle}</span>
      </div>

      <Button
        onClick={buttonHandler}
        variant="contained"
        sx={{
          bgcolor: "#F23A3A",
          fontWeight: "700",
          color: "white",
          borderColor: "#F23A3A",
          gap: "0.75rem",
          padding: "0.75rem",
          borderRadius: "0.75rem",
          alignItems: "center",
          ":hover": {
            borderColor: "#F23A3A",
            bgcolor: "#F23A3A",
          },
        }}
      >
        <ReactSVG src={addCircle} />
        {buttonText}
      </Button>
    </div>
  );
};

export default NoData;
