import React from "react"

function DownloadButton({ onClick, children }) {
	return (
		<button onClick={onClick} style={{ background: "#0a2540", color: "white", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}>
			{children}
		</button>
	)
}

export default DownloadButton
