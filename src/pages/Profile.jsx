import { studentData } from "../data/studentData"

function Profile() {
  return (
    <div>
      <h2>Student Profile</h2>
      <p><b>Name:</b> {studentData.name}</p>
      <p><b>Register No:</b> {studentData.registerNo}</p>
      <p><b>Department:</b> {studentData.department}</p>
      <p><b>College:</b> {studentData.college}</p>
    </div>
  )
}

export default Profile
