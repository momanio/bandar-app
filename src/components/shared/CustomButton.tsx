import { ReactSVG } from "react-svg";

import { Button } from "@mui/material";

const CustomButton = ({
  buttonText,
  buttonIcon,
  buttonHandler,
}: {
  buttonText: string;
  buttonIcon: string;
  buttonHandler: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 rounded-[1.688rem] ">
      <Button
        onClick={buttonHandler}
        variant="text"
        size="small"
        sx={{
          bgcolor: "#333638",
          fontWeight: "500",
          color: "white",
          borderColor: "transparent",
          gap: "0.75rem",
          padding: "0.75rem",
          borderRadius: "0.75rem",
          alignItems: "center",
          ":hover": {
            borderColor: "#333638",
            bgcolor: "#333638",
          },
        }}
      >
        <ReactSVG src={buttonIcon} />
        {buttonText}
      </Button>
    </div>
  );
};

export default CustomButton;
