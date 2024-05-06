import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import AddFood from "./AddFood";
import { useState } from "react";
import FoodCard from "./FoodCard";
import ItemHolder from "components/shared/ItemHolder";

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
        <FoodCard />
        <FoodCard /> <FoodCard /> <FoodCard /> <FoodCard /> <FoodCard />
        <FoodCard /> <FoodCard /> <FoodCard /> <FoodCard />
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
