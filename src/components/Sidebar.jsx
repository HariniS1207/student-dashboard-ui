function Sidebar({ setActivePage }) {
  const itemStyle = {
    padding: "8px",
    margin: "8px 0",
    cursor: "pointer",
    borderRadius: "4px"
  }

  return (
    <div style={{
      width: "230px",
      backgroundColor: "#0a2540",
      color: "white",
      padding: "20px"
    }}>
      <h2>Student</h2>

      <div style={itemStyle} onClick={() => setActivePage("Home")}>Home</div>
      <div style={itemStyle} onClick={() => setActivePage("Profile")}>Profile</div>
      <div style={itemStyle} onClick={() => setActivePage("1st Year")}>1st Year</div>
      <div style={itemStyle} onClick={() => setActivePage("2nd Year")}>2nd Year</div>
      <div style={itemStyle} onClick={() => setActivePage("3rd Year")}>3rd Year</div>
      <div style={itemStyle} onClick={() => setActivePage("4th Year")}>4th Year</div>
      <div style={itemStyle} onClick={() => setActivePage("Report")}>
        Overall Performance
      </div>
    </div>
  )
}

export default Sidebar
