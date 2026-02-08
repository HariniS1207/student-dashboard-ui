export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h2>MSEC</h2>
        <span>Student Portal</span>
      </div>

      <nav>
        <a className="active">Home</a>
        <a>Academics</a>
        <a>Activities</a>
        <a>Profile</a>
      </nav>
    </aside>
  );
}