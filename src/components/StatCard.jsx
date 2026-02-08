import "../styles/layout.css"

function StatCard({ title, value, subtitle, highlight }) {
  return (
    <div className={`stat-card ${highlight ? "stat-highlight" : ""}`}>
      <p className="stat-title">{title}</p>
      <h1 className="stat-value">{value}</h1>
      {subtitle && <p className="stat-subtitle">{subtitle}</p>}
    </div>
  )
}

export default StatCard
