import NoData from "components/shared/NoData";
import Title from "components/shared/Title";

const FoodItem = () => {
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title previousURL={"/admin/dashboard/nutrition"}>
        المكملات الغذائية
      </Title>
      <NoData
        title="لم تتم إضافة أي صنف غذائي"
        subTitle="انقر على الزر أدنى لإضافة أول صنف غذائي"
        buttonText="إضافة صنف"
        buttonHandler={() => {}}
      />
    </div>
  );
};

export default FoodItem;
