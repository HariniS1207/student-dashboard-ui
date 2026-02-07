import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function StudentLayout({ children, setActivePage }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setActivePage={setActivePage} />
      <div style={{ flex: 1 }}>
        <Topbar />
        <div style={{ padding: '20px' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StudentLayout
