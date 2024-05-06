import DeleteDialog from "components/shared/DeleteDialog";
import CreateSubscDialog from "../../shared/CreateSubscDialog";
import ShowUserDialog from "./ShowUserDialog";
import { Button } from "@mui/material";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import addIcon from "assets/icons/addIcon.svg";
import CreateSubsStepTow from "components/shared/CreateSubsStepTow";

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
  const [open, setOpen] = useState(false);
  const [openTow, setOpenTow] = useState(false);

  return (
    <div className="flex items-center w-full py-4 pr-[3.125rem] pl-[2.813rem] justify-between odd:bg-[#1a1d1f] even:bg-[#272b304d] text-[#f3f3f4] ">
      <div className="w-fit ">{name}</div>
      <div className="w-fit ">{mobile}</div>
      <div className="w-fit ">{email}</div>
      <div className="w-fit ">{age}</div>
      <div className="w-fit ">{date}</div>
      <div className="flex gap-4 w-fit">
        <CreateSubscDialog
          handleClose={() => {
            setOpen(!open);
          }}
          open={open}
        />
        <CreateSubsStepTow
          handleClose={() => {
            setOpenTow(!openTow);
          }}
          open={openTow}
          openStepTow={() => {
            setOpen(!open);
            setOpenTow(!openTow);
          }}
        />
        <Button
          onClick={() => {
            setOpen(!open);
          }}
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
        <ShowUserDialog />
        <DeleteDialog
          title="حذف طلب التسجيل"
          subTitle="عند حذفك لهذا الطلب لن تتمكن من استرجاعه"
        />
      </div>
    </div>
  );
};

export default RequestCard;
