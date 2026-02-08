import Sidebar from "../components/Sidebar";
import Header from "../components/header";

export default function StudentLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        {children}
      </div>
    </div>
  );
}