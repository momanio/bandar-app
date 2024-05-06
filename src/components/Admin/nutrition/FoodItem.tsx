import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import AddFood from "./AddFood";
import { useState } from "react";
import ItemHolder from "components/shared/ItemHolder";
import NutritionCardItem from "../../shared/NutritionCardItem";

const FoodItem = () => {
  const [showAddFood, setShowAddFood] = useState<boolean>(false);
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title previousURL={"/admin/dashboard/nutrition"}>الأصناف الغذائية</Title>
      {/* <NoData
        title="لم تتم إضافة أي صنف غذائي"
        subTitle="انقر على الزر أدنى لإضافة أول صنف غذائي"
        buttonText="إضافة صنف"
        buttonHandler={() => {
          setShowAddFood(!showAddFood);
        }}
      /> */}
      <ItemHolder>
        <NutritionCardItem isFood={true} />
        <NutritionCardItem isFood={true} />
        <NutritionCardItem isFood={true} />
        <NutritionCardItem isFood={true} />
        <NutritionCardItem isFood={true} />
      </ItemHolder>

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
