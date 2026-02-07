import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function StudentLayout({ children, setActivePage }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setActivePage={setActivePage} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ padding: "20px", overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StudentLayout
