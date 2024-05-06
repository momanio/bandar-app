import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import React, { useState } from "react";
import AddVitamins from "./AddVitamins";
import ItemHolder from "components/shared/ItemHolder";
import NutritionCardItem from "components/shared/NutritionCardItem";

const Vitamins = () => {
  const [showAddVitamins, setShowAddVitamins] = useState<boolean>(false);
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title previousURL={"/admin/dashboard/nutrition"}>فيتامينات</Title>
      {/* <NoData
        title="لم تتم إضافة أي فيتامينات"
        subTitle="انقر على الزر أدنى لإضافة أول فيتامين"
        buttonText="إضافة فيتامين"
        buttonHandler={() => {
          setShowAddVitamins(!showAddVitamins);
        }}
      /> */}
      <ItemHolder>
        <NutritionCardItem isVitamin={true} />
        <NutritionCardItem isVitamin={true} />
        <NutritionCardItem isVitamin={true} />
        <NutritionCardItem isVitamin={true} />
        <NutritionCardItem isVitamin={true} />
        <NutritionCardItem isVitamin={true} />
      </ItemHolder>
      <AddVitamins
        closeHandler={() => {
          setShowAddVitamins(!showAddVitamins);
        }}
        show={showAddVitamins}
      />
    </div>
  );
};

export default Vitamins;
