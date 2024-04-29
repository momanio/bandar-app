import Title from "components/shared/Title";
import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";

function createData(
  id: number,
  name: string,
  phone: string,
  email: string,
  age: string,
  created_at: string
) {
  return {
    id,
    name,
    phone,
    email,
    age,
    created_at,
  };
}

const rows = [
  createData(
    1,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
  createData(
    2,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
  createData(
    3,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
  createData(
    4,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
];

const UsersTable = () => {
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const users = await getUsers();
  //       console.log(users);
  //       setRows(users);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  const tags = ["name", "age", "any"];
  return (
    <>
      <Title>قائمة طلبات التسجيل</Title>
      <div className="flex flex-col bg-black-300 rounded-xl h-full w-full ">
        <div className="flex py-4 px-12 justify-between">
          {tags.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
        <RequestCard age="18" email="mustaf@ggg" name="mustafa" />
        <RequestCard age="18" email="mustaf@ggg" name="mustafa" />
        <RequestCard age="18" email="mustaf@ggg" name="mustafa" />
        <RequestCard age="18" email="mustaf@ggg" name="mustafa" />
      </div>
    </>
  );
};

export default UsersTable;
