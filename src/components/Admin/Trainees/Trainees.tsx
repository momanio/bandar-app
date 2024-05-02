import Title from "components/shared/Title";
import { TraineesTable } from "utils/Admin/constant";
import TraineesCard from "./TraineesCard";

const DummyData = [
  {
    name: "نائف عبدالله الديرة",
    age: "22",
    foodProgram: "لا يوجد",
    trainingProgram: "لا يوجد",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    age: "22",
    foodProgram: "لا يوجد",
    trainingProgram: "لا يوجد",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    age: "22",
    foodProgram: "لا يوجد",
    trainingProgram: "لا يوجد",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    age: "22",
    foodProgram: "لا يوجد",
    trainingProgram: "لا يوجد",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    age: "22",
    foodProgram: "لا يوجد",
    trainingProgram: "لا يوجد",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    age: "22",
    foodProgram: "لا يوجد",
    trainingProgram: "لا يوجد",
    date: "12/12/2020",
  },
];

const Trainees = () => {
  return (
    <div className="flex flex-col h-full gap-11">
      <Title>المتدربين</Title>
      <div className="flex flex-col h-full bg-black-1000 rounded-lg ">
        <div className="flex py-4 pr-[3.125rem] pl-[0.5rem] justify-between">
          {TraineesTable.map((item, index) => {
            return (
              <div
                className="w-full text-black-500 font-medium text-sm"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="h-full relative overflow-y-scroll">
          <div className="absolute w-full">
            {DummyData.map((item, index) => (
              <TraineesCard
                key={index}
                name={item.name}
                age={item.age}
                foodProgram={item.foodProgram}
                trainingProgram={item.trainingProgram}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainees;
