import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import React, { useState } from "react";
import AddNutritionalSupplements from "./AddNutritionalSupplements";
import ItemHolder from "components/shared/ItemHolder";
import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import addCircle from "assets/icons/add-circle.svg";
import CardItem from "components/shared/CardItem";

const NutritionalSupplements = () => {
  const [showAddNutritionalSupplements, setShowAddNutritionalSupplements] =
    useState<boolean>(false);

  return (
    <div className="flex gap-11 flex-col h-full">
      <Title
        previousURL={"/admin/dashboard/nutrition"}
        addButton={
          true && (
            <Button
              onClick={() => {
                setShowAddNutritionalSupplements(
                  !showAddNutritionalSupplements
                );
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
              إضافة مكمل غذائي
            </Button>
          )
        }
      >
        المكملات الغذائية
      </Title>
      {/* <NoData
        title="لم تتم إضافة أي مكمل غذائي"
        subTitle="انقر على الزر أدنى لإضافة أول مكمل غذائي"
        buttonText="إضافة مكمل غذائي"
        buttonHandler={() => {
          setShowAddNutritionalSupplements(!showAddNutritionalSupplements);
        }}
      /> */}
      <ItemHolder>
        <CardItem isNutritionalSupplements={true} />
        <CardItem isNutritionalSupplements={true} />
        <CardItem isNutritionalSupplements={true} />
        <CardItem isNutritionalSupplements={true} />
        <CardItem isNutritionalSupplements={true} />
        <CardItem isNutritionalSupplements={true} />
      </ItemHolder>
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
