import NoData from "components/shared/NoData";
import Title from "components/shared/Title";

const Training = () => {
  return (
    <div className="flex gap-11 flex-col h-full">
      <Title>التمارين</Title>
      <NoData
        title="لم تتم إضافة أي تمرين"
        subTitle="انقر على الزر أدنى لإضافة أول تمرين"
        buttonText="إضافة تمرين"
        buttonHandler={() => {}}
      />
    </div>
  );
};

export default Training;
