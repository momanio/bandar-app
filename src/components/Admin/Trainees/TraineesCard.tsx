import DeleteUserDialog from "../Dashboard/DeleteUserDialog";

const TraineesCard = ({
  name,
  age,
  foodProgram,
  trainingProgram,
  date,
}: {
  name: string;
  age: string;
  foodProgram: string;
  trainingProgram: string;
  date: string;
}) => {
  return (
    <div className="flex items-center py-4 pr-[3.125rem] justify-between odd:bg-[#1a1d1f] even:bg-[#272b304d] text-[#f3f3f4] ">
      <div className="w-full">{name}</div>
      <div className="w-full">{age}</div>
      <div className="w-full">{foodProgram}</div>
      <div className="w-full">{trainingProgram}</div>
      <div className="w-full">{date}</div>
      <div className="flex items-center w-full">
        <DeleteUserDialog />
      </div>
    </div>
  );
};

export default TraineesCard;
