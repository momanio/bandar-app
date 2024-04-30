import React from "react";

const RequestCard = ({
  name,
  age,
  email,
}: {
  name: string;
  age: string;
  email: string;
}) => {
  return (
    <div className="flex py-4 px-12 justify-between odd:bg-slate-400 even:bg-black-100">
      <div className="">{name}</div>
      <div className="">{age}</div>
      <div className="">{email}</div>
    </div>
  );
};

export default RequestCard;
