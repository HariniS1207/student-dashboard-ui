import "../styles/layout.css"

function ChartBox({ title, children }) {
	return (
		<div style={{ background: "white", padding: 18, borderRadius: 10 }}>
			{title && <h4 style={{ margin: 0 }}>{title}</h4>}
			<div style={{ marginTop: 12 }}>{children}</div>
		</div>
	)
}

export default ChartBox
