import React from "react";
import Title from "components/shared/Title";

import { RequestsTable, traineesTable } from "utils/Admin/constant";
import { Fragment } from "react/jsx-runtime";
import RequestCard from "../Dashboard/RequestCard";
import TraineesCard from "./TraineesCard";
const Trainees = () => {
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

  return (
    <div className="flex flex-col h-full gap-11">
      <Title>المتدربين</Title>
      <div className="flex flex-col h-full bg-black-1000 rounded-lg ">
        <div className="flex py-4 pr-[3.125rem] pl-[] justify-between">
          {traineesTable.map((item, index) => {
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
                mobile={item.mobile}
                email={item.email}
                age={item.age}
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
