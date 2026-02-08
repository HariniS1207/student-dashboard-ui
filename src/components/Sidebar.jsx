import { useState } from "react"
import "../styles/layout.css"

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { key: "Home", label: "Home", icon: "🏠" },
    { key: "Academics", label: "Academics", icon: "📚" },
    { key: "Activities", label: "Activities", icon: "🏆" },
    { key: "Profile", label: "Profile", icon: "👤" },
    { key: "Report", label: "Overall Report", icon: "📄" }
  ]

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <div className="sidebar-logo">🎓</div>
        <div>
          <h2>MSEC</h2>
          <small>Student Portal</small>
        </div>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        {menuItems.map(item => (
          <div
            key={item.key}
            className={`sidebar-item ${
              activePage === item.key ? "active" : ""
            }`}
            onClick={() => setActivePage(item.key)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
