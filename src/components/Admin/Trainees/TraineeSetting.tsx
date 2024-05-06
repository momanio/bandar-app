import UserInfo from "components/shared/UserInfo";
import UserSetting from "components/shared/UserSetting";

const TraineeSetting = () => {
  return (
    <div className="flex gap-[1.563rem] h-full w-full">
      <UserInfo />
      <UserSetting />
    </div>
  );
};

export default TraineeSetting;
