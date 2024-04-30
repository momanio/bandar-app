import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import addIcon from "assets/icons/addIcon.svg";
import eyeIcon from "assets/icons/eye.svg";

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
    <div className="flex py-4 px-12 justify-between odd:bg-[#1a1d1f] even:bg-[#272b304d] text-[#f3f3f4] ">
      <div className="">{name}</div>
      <div className="">{mobile}</div>
      <div className="">{email}</div>
      <div className="">{age}</div>
      <div className="">{date}</div>
      <div className="flex items-start space-x-2">
        <Button
          color="error"
          variant="contained"
          size="small"
          startIcon={<img src={addIcon} alt="plus" />}
        >
          انشاء اشتراك
        </Button>
        <Button
          color="success"
          variant="text"
          size="small"
          startIcon={<img src={eyeIcon} alt="plus" />}
        >
          عرض
        </Button>

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default RequestCard;
