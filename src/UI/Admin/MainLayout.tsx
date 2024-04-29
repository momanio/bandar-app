import Header from "components/Admin/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black-950 h-full">
      <Header />
      <div className="px-20 pb-20 pt-10">{children}</div>
    </div>
  );
};

export default MainLayout;
