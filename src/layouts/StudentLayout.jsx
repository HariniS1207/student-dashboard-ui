import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function StudentLayout({ children, setActivePage }) {
  return (
    <div className="app-container">
      <Sidebar setActivePage={setActivePage} />

      <div className="main-content">
        <Topbar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  )
}

export default StudentLayout
