import Title from "components/shared/Title";
import RequestCard from "./RequestCard";
import { RequestsTable } from "utils/Admin/constant";

const DummyData = [
  {
    name: "نائف عبدالله الديرة",
    mobile: "0123456789",
    email: "naifuiux@gmail.com",
    age: "25",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    mobile: "0123456789",
    email: "naifuiux@gmail.com",
    age: "25",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    mobile: "0123456789",
    email: "naifuiux@gmail.com",
    age: "25",
    date: "12/12/2020",
  },
  {
    name: "نائف عبدالله الديرة",
    mobile: "0123456789",
    email: "naifuiux@gmail.com",
    age: "25",
    date: "12/12/2020",
  },
];

const UsersTable = () => {
  return (
    <>
      <Title>قائمة طلبات التسجيل</Title>
      <div className="flex flex-col bg-[#1a1d1f] text-[#81858d] rounded-xl h-full w-full ">
        <div className="flex py-4 px-12 justify-between">
          {RequestsTable.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        {DummyData.map((item, index) => (
          <RequestCard
            key={index}
            name={item.name}
            mobile={item.mobile}
            email={item.email}
            age={item.age}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
};

export default UsersTable;
