import APIService from "../api";

export const getUsers = async () => {
  try {
    const users = await APIService.getRequestUsers();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
