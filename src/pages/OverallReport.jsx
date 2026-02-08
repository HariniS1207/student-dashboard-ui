import { studentData } from "../data/studentData"
import { reportData } from "../data/reportData"

function OverallReport() {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "30px",
      maxWidth: "700px",
      margin: "auto",
      border: "1px solid #ccc"
    }}>
      <h2 style={{ textAlign: "center" }}>Overall Performance Report</h2>

      <p><b>Name:</b> {studentData.name}</p>
      <p><b>Register No:</b> {studentData.registerNo}</p>
      <p><b>CGPA:</b> {reportData.overallCGPA}</p>
      <p><b>Average Attendance:</b> {reportData.avgAttendance}%</p>

      <button style={{ marginTop: "20px" }}>
        Download Report
      </button>
    </div>
  )
}

export default OverallReport
