import { studentData } from "../data/studentData"

function Topbar() {
  return (
    <div style={{
      height: "60px",
      backgroundColor: "white",
      borderBottom: "1px solid #ddd",
      padding: "15px 25px",
      display: "flex",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>
        {studentData.name}’s Dashboard
      </h2>
    </div>
  )
}

export default Topbar
