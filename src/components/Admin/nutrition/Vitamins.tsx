import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import React, { useState } from "react";
import AddVitamins from "./AddVitamins";
import ItemHolder from "components/shared/ItemHolder";
import CardItem from "components/shared/CardItem";
import addCircle from "assets/icons/add-circle.svg";
import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";

const Vitamins = () => {
  const [showAddVitamins, setShowAddVitamins] = useState<boolean>(false);
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title
        previousURL={"/admin/dashboard/nutrition"}
        addButton={
          true && (
            <Button
              onClick={() => {
                setShowAddVitamins(!showAddVitamins);
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
              إضافة فيتامين
            </Button>
          )
        }
      >
        فيتامينات
      </Title>
      {/* <NoData
        title="لم تتم إضافة أي فيتامينات"
        subTitle="انقر على الزر أدنى لإضافة أول فيتامين"
        buttonText="إضافة فيتامين"
        buttonHandler={() => {
          setShowAddVitamins(!showAddVitamins);
        }}
      /> */}
      <ItemHolder>
        <CardItem isVitamin={true} />
        <CardItem isVitamin={true} />
        <CardItem isVitamin={true} />
        <CardItem isVitamin={true} />
        <CardItem isVitamin={true} />
        <CardItem isVitamin={true} />
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
