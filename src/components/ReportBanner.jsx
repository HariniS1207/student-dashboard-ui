import "../styles/layout.css"

function ReportBanner({ title, description, actionText, onAction }) {
  return (
    <div className="report-banner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", padding: 18, borderRadius: 10, marginBottom: 16 }}>
      <div className="report-banner-text">
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: "6px 0 0 0", color: "#6b7280" }}>{description}</p>
      </div>

      {actionText && (
        <button className="report-banner-btn" onClick={onAction} style={{ background: "#0a2540", color: "white", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" }}>
          {actionText}
        </button>
      )}
    </div>
  )
}

export default ReportBanner
