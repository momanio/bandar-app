import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import React from "react";

const Vitamins = () => {
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title previousURL={"/admin/dashboard/nutrition"}>
        المكملات الغذائية
      </Title>
      <NoData
        title="لم تتم إضافة أي فيتامينات"
        subTitle="انقر على الزر أدنى لإضافة أول فيتامين"
        buttonText="إضافة فيتامين"
        buttonHandler={() => {}}
      />
    </div>
  );
};

export default Vitamins;
