import Button from "@mui/material/Button";
import setting from "assets/icons/setting-2.svg";
import DeleteDialog from "components/shared/DeleteDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import trashIcon from "assets/icons/trashIcon.svg";
const TraineesCard = ({
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
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <div className="flex items-center w-full py-4 pr-[3.125rem] pl-[6.438rem] justify-between odd:bg-[#1a1d1f] even:bg-[#272b304d] text-[#f3f3f4] ">
      <div className="w-fit ">{name}</div>
      <div className="w-fit ">{mobile}</div>
      <div className="w-fit ">{email}</div>
      <div className="w-fit ">{age}</div>
      <div className="w-fit ">{date}</div>
      <div className="flex gap-[2.375rem] w-fit">
        <Button
          onClick={() => {
            navigate(`/admin/dashboard/trainee-setting/:${age}`);
          }}
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
          <ReactSVG src={setting} />
        </Button>
        <Button
          onClick={() => {
            setDeleteModal(!deleteModal);
          }}
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
          <ReactSVG src={trashIcon} />
        </Button>
        <DeleteDialog
          title="حذف طلب التسجيل"
          subTitle="عند حذفك لهذا المتدرب لن يتمكن من تسجيل الدخول مرة أخرى وسيتم حذف جميع بياناته"
          handleClose={() => {
            setDeleteModal(!deleteModal);
          }}
          open={deleteModal}
        />
      </div>
    </div>
  );
};

export default TraineesCard;
