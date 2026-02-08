import "../styles/layout.css"

function SectionCard({ title, rightText, children }) {
  return (
    <div className="semester-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {rightText && <small>{rightText}</small>}
      </div>

      <div>
        {children}
      </div>
    </div>
  )
}

export default SectionCard
