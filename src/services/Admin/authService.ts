import { NavigateFunction } from "react-router-dom";
import { ACCESS_TOKEN } from "utils/Admin/constant";
import ApiService from "../api";

const baseURL = "public/api";

export const login = async (email: string, password: string) => {
  return ApiService.fetchData({
    method: "POST",
    url: `${baseURL}/admin/login`,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    data: {
      email,
      password,
    },
  });
};

export const isLoggedIn = () => !!localStorage.getItem(ACCESS_TOKEN);

export const onSignOutSuccess = () => {
  localStorage.clear();
};
export const Logout = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate("/Login");
};
