import { ACCESS_TOKEN } from "./Admin/constant";

export const checkUserAuthentication = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return token ? true : false;
};
