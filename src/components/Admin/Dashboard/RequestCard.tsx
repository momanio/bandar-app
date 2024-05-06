import Button from "@mui/material/Button";

import addIcon from "assets/icons/addIcon.svg";
import eyeIcon from "assets/icons/eye.svg";
import { ReactSVG } from "react-svg";
import trash from "assets/icons/trash.svg";
import Dialogt1 from "components/shared/Dialog";
const RequestCard = ({
  name,
  mobile,
  email,
  age,
  date,
}: {
  name: string;
  mobile: string;
  email: string;
  age: string;
  date: string;
}) => {
  return (
    <div className="flex items-center w-full py-4 pr-[3.125rem] pl-[2.813rem] justify-between odd:bg-[#1a1d1f] even:bg-[#272b304d] text-[#f3f3f4] ">
      <div className="w-fit ">{name}</div>
      <div className="w-fit ">{mobile}</div>
      <div className="w-fit ">{email}</div>
      <div className="w-fit ">{age}</div>
      <div className="w-fit ">{date}</div>
      <div className="flex gap-4 w-fit">
        <Button
          onClick={() => {}}
          variant="contained"
          sx={{
            bgcolor: "#F23A3A",
            fontWeight: "700",
            color: "white",
            borderColor: "#F23A3A",
            gap: "0.75rem",
            paddingX: "0.75rem",
            paddingY: "0.375rem",
            borderRadius: "0.75rem",
            alignItems: "center",
            ":hover": {
              borderColor: "#F23A3A",
              bgcolor: "#F23A3A",
            },
          }}
        >
          <ReactSVG src={addIcon} />
          انشاء اشتراك
        </Button>
        <Button
          sx={{
            bgcolor: "#333638",
            fontWeight: "700",
            color: "#BABBBE",
            borderColor: "#333638",
            gap: "0.625rem",
            padding: "0.375rem",
            borderRadius: "0.75rem",
            alignItems: "center",
            ":hover": {
              borderColor: "#333638",
              bgcolor: "#333638",
            },
          }}
        >
          <ReactSVG src={eyeIcon} />
          عرض
        </Button>
        <Button
          sx={{
            bgcolor: "#333638",
            borderColor: "#333638",
            display: "flex",
            padding: "0.375rem",
            minWidth: "2rem",
            borderRadius: "0.75rem",
            alignItems: "center",
            ":hover": {
              borderColor: "#333638",
              bgcolor: "#333638",
            },
          }}
        >
          <ReactSVG src={trash} />
        </Button>
      </div>
      <Dialogt1 />
    </div>
  );
};

export default RequestCard;
