import { Outlet } from "react-router-dom";

const ExamLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default ExamLayout;
