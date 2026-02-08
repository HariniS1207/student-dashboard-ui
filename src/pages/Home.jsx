import { studentData } from "../data/studentData"
import { reportData } from "../data/reportData"

function Home() {
  return (
    <div>
      <h2>Student Dashboard Home</h2>
      <p>Welcome <b>{studentData.name}</b> ({studentData.registerNo})</p>

      <div className="dashboard-grid">
  <div className="dashboard-card">
    <h4>CGPA</h4>
    <h1>{reportData.overallCGPA}</h1>
  </div>

  <div className="dashboard-card">
    <h4>Attendance</h4>
    <h1>{reportData.avgAttendance}%</h1>
  </div>

  <div className="dashboard-card">
    <h4>Projects</h4>
    <h1>{reportData.totalProjects}</h1>
  </div>

  <div className="dashboard-card">
    <h4>Certifications</h4>
    <h1>{reportData.totalCertifications}</h1>
  </div>
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
