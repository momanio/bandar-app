import MainLayout from "UI/Admin/MainLayout";
import Header from "components/Admin/Header";
import UsersTable from "components/Admin/UsersTable";

const AdminDashboard = () => {
  return (
    <MainLayout>
      <UsersTable />
    </MainLayout>
  );
};

export default AdminDashboard;
