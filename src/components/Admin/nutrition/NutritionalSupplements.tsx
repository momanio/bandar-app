import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import React, { useState } from "react";
import AddNutritionalSupplements from "./AddNutritionalSupplements";

const NutritionalSupplements = () => {
  const [showAddNutritionalSupplements, setShowAddNutritionalSupplements] =
    useState<boolean>(false);

  return (
    <div className="flex gap-11 flex-col h-full">
      <Title previousURL={"/admin/dashboard/nutrition"}>
        المكملات الغذائية
      </Title>
      <NoData
        title="لم تتم إضافة أي مكمل غذائي"
        subTitle="انقر على الزر أدنى لإضافة أول مكمل غذائي"
        buttonText="إضافة مكمل غذائي"
        buttonHandler={() => {
          setShowAddNutritionalSupplements(!showAddNutritionalSupplements);
        }}
      />
      <AddNutritionalSupplements
        show={showAddNutritionalSupplements}
        closeHandler={() => {
          setShowAddNutritionalSupplements(!showAddNutritionalSupplements);
        }}
      />
    </div>
  );
};

export default NutritionalSupplements;
