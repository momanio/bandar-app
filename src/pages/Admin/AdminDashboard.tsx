import MainLayout from "UI/Admin/MainLayout";
import Header from "components/Admin/Header";
import UsersTable from "components/Admin/UsersTable";
import Title from "components/shared/Title";

const AdminDashboard = () => {
  return (
    <MainLayout>
      <Header />
      <Title>قائمة طلبات التسجيل</Title>
      <UsersTable />
    </MainLayout>
  );
};

export default AdminDashboard;
