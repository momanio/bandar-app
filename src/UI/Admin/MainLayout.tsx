import Header from "components/shared/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "services/Admin/authService";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/admin/dashboard/");
    }
  }, [navigate]);
  return (
    <div className="bg-black-950 flex flex-col h-full">
      <Header />
      <div className="px-4 pt-7 pb-12 xl:px-20 xl:pb-20 xl:pt-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
