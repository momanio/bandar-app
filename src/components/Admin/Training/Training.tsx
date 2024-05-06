import NoData from "components/shared/NoData";
import Title from "components/shared/Title";
import AddTraining from "./AddTraining";
import { useState } from "react";
import ItemHolder from "components/shared/ItemHolder";
import CardItem from "components/shared/CardItem";
import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import addCircle from "assets/icons/add-circle.svg";

const Training = () => {
  const [showAddTraining, setShowAddTraining] = useState<boolean>(false);
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title
        addButton={
          true && (
            <Button
              onClick={() => {
                setShowAddTraining(!showAddTraining);
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
              إضافة تمرين
            </Button>
          )
        }
      >
        التمارين
      </Title>
      {/* <NoData
        title="لم تتم إضافة أي تمرين"
        subTitle="انقر على الزر أدنى لإضافة أول تمرين"
        buttonText="إضافة تمرين"
        buttonHandler={() => {
          setShowAddTraining(!showAddTraining);
        }}
      /> */}
      <ItemHolder>
        <CardItem isTraining={true} />
        <CardItem isTraining={true} />
        <CardItem isTraining={true} />
        <CardItem isTraining={true} />
        <CardItem isTraining={true} />
      </ItemHolder>
      <AddTraining
        closeHandler={() => {
          setShowAddTraining(!showAddTraining);
        }}
        show={showAddTraining}
      />
    </div>
  );
};

export default Training;
