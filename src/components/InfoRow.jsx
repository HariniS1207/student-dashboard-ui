import React from "react"

function InfoRow(props) {
  // If label/value pair is provided, render simple row
  if (props.label && props.value !== undefined) {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", color: "#374151" }}>
        <span>{props.label}</span>
        <span>{props.value}</span>
      </div>
    )
  }

  // Otherwise render subject with score breakdown (used in semester views)
  const { subject, ut1, ut2, iat1, iat2, score } = props
  if (subject) {
    return (
      <div style={{ padding: "6px 0", color: "#374151" }}>
        <div style={{ fontWeight: 600 }}>{subject}</div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          UT1: {ut1} • UT2: {ut2} • IAT1: {iat1} • IAT2: {iat2} • Result: {score}
        </div>
      </div>
    )
  }

  return null
}

export default InfoRow
