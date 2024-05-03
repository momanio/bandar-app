import DeleteDialog from "components/shared/DeleteDialog";
import CreateSubscDialog from "./CreateSubscDialog";
import ShowUserDialog from "./ShowUserDialog";
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
        <CreateSubscDialog />
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
