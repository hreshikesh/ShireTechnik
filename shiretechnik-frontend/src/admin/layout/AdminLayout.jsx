import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#05080d] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#1f2937 transparent" }}
        >
          <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-8 md:py-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;