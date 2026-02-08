function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      
      {/* College Header */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "28px" }}>🎓</div>
        <h2 style={{ margin: 0 }}>MSEC</h2>
        <small>Student Portal</small>
      </div>

      <div className="sidebar-item" onClick={() => setActivePage("Home")}>Home</div>
      <div className="sidebar-item" onClick={() => setActivePage("Profile")}>Profile</div>
      <div className="sidebar-item" onClick={() => setActivePage("1st Year")}>1st Year</div>
      <div className="sidebar-item" onClick={() => setActivePage("2nd Year")}>2nd Year</div>
      <div className="sidebar-item" onClick={() => setActivePage("3rd Year")}>3rd Year</div>
      <div className="sidebar-item" onClick={() => setActivePage("4th Year")}>4th Year</div>
      <div className="sidebar-item" onClick={() => setActivePage("Report")}>
        Overall Performance
      </div>
    </div>
  )
}

export default Sidebar
