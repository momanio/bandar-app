export const isAdmin = () => {
  const isAdmin = localStorage.getItem("user-role");
  return isAdmin === "admin";
};
