import React from "react"

function YearTabs({ years = ["1st Year","2nd Year","3rd Year","4th Year"], onSelect }) {
	return (
		<div style={{ display: "flex", gap: 8 }}>
			{years.map(y => (
				<div key={y} onClick={() => onSelect && onSelect(y)} style={{ padding: "8px 12px", borderRadius: 20, background: "#e5ecf6", cursor: "pointer" }}>
					{y}
				</div>
			))}
		</div>
	)
}

export default YearTabs
