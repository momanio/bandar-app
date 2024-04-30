import MainLayout from "UI/Admin/MainLayout";
import UsersTable from "components/Admin/UsersTable";

const AdminDashboard = () => {
  return (
    <MainLayout>
      <UsersTable />
    </MainLayout>
  );
};

export default AdminDashboard;
