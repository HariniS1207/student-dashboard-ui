export default function Header() {
  return (
    <header className="header">
      <div className="profile">
        <div className="avatar">RK</div>
        <div>
          <strong>Rajesh Kumar</strong>
          <p>MSEC2024001</p>
        </div>
      </div>

      <button className="logout">↪ Logout</button>
    </header>
  );
}