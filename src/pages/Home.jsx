import { studentData } from "../data/studentData"
import { reportData } from "../data/reportData"

function Home() {
  return (
    <div>
      <h2>Student Dashboard Home</h2>
      <p>Welcome <b>{studentData.name}</b> ({studentData.registerNo})</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="CGPA" value={reportData.overallCGPA} />
        <Card title="Attendance" value={reportData.avgAttendance + "%"} />
        <Card title="Projects" value={reportData.totalProjects} />
        <Card title="Certifications" value={reportData.totalCertifications} />
      </div>
    </div>
  )
}

function Card({ title, value }) {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      width: "180px",
      borderRadius: "8px",
      boxShadow: "0 0 5px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  )
}

export default Home
