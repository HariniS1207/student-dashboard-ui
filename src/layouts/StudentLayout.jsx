import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function StudentLayout({ children, setActivePage, activePage }) {
  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

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
