import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import AddFood from "./AddFood";
import { useState } from "react";

const FoodItem = () => {
  const [showAddFood, setShowAddFood] = useState<boolean>(false);
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title previousURL={"/admin/dashboard/nutrition"}>
        المكملات الغذائية
      </Title>
      <NoData
        title="لم تتم إضافة أي صنف غذائي"
        subTitle="انقر على الزر أدنى لإضافة أول صنف غذائي"
        buttonText="إضافة صنف"
        buttonHandler={() => {
          setShowAddFood(!showAddFood);
        }}
      />
      <AddFood
        closeHandler={() => {
          setShowAddFood(!showAddFood);
        }}
        show={showAddFood}
      />
    </div>
  );
};

export default FoodItem;
