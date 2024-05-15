import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import AddFood from "./AddFood";
import { useState } from "react";
import ItemHolder from "components/shared/ItemHolder";
import CardItem from "../../shared/CardItem";
import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import addCircle from "assets/icons/add-circle.svg";

const FoodItem = () => {
  const [showAddFood, setShowAddFood] = useState<boolean>(false);
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title
        previousURL={"/admin/dashboard/nutrition"}
        addButton={
          true && (
            <Button
              onClick={() => {
                setShowAddFood(!showAddFood);
              }}
              variant="contained"
              sx={{
                bgcolor: "#F23A3A",
                fontWeight: "700",
                color: "white",
                borderColor: "#F23A3A",
                gap: "0.75rem",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                alignItems: "center",
                ":hover": {
                  borderColor: "#F23A3A",
                  bgcolor: "#F23A3A",
                },
              }}
            >
              <ReactSVG src={addCircle} />
              إضافة صنف
            </Button>
          )
        }
      >
        الأصناف الغذائية
      </Title>
      {/* <NoData
        title="لم تتم إضافة أي صنف غذائي"
        subTitle="انقر على الزر أدنى لإضافة أول صنف غذائي"
        buttonText="إضافة صنف"
        buttonHandler={() => {
          setShowAddFood(!showAddFood);
        }}
      /> */}
      <ItemHolder>
        <CardItem isFood={true} />
        <CardItem isFood={true} />
        <CardItem isFood={true} />
        <CardItem isFood={true} />
        <CardItem isFood={true} />
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
