import { Button } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Option = ({
  id,
  text,
  icon,
  handler,
  path,
}: {
  id: number;
  text: string;
  icon: string;
  handler: () => void;
  path: string;
}) => {
  const location = useLocation();

  return (
    <Button
      onClick={handler}
      variant="contained"
      sx={{
        width: "100%",
        boxShadow: "none",
        bgcolor:
          location.pathname.substring(
            0,
            useLocation().pathname.lastIndexOf("/")
          ) === path
            ? "#50535B"
            : "#212426",
        fontWeight: "700",
        color: "white",
        borderColor: "#50535B",
        gap: "0.75rem",
        paddingY: "0.875rem",
        paddingX: "1rem",
        borderRadius: "0.75rem",
        justifyContent: "start",
        flexDirection: "row-reverse",
        ":hover": {
          borderColor: "#50535B",
          bgcolor: "#50535B",
        },
      }}
    >
      {text}
      <ReactSVG src={icon} />
    </Button>
  );
};

export default Option;
