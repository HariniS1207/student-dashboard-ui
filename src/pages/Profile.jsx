import SectionCard from "../components/SectionCard"

function Profile() {
  return (
    <SectionCard title="Student Profile">
      <div className="profile-card">
        <div className="profile-avatar">H</div>

        <div className="profile-details">
          <h3>Harini</h3>
          <p>CSE | 2022–2026</p>

          <div className="profile-info">
            <div><span>Register No:</span> 22CS045</div>
            <div><span>Email:</span> harini@msec.edu</div>
            <div><span>Department:</span> CSE</div>
            <div><span>College:</span> MSEC</div>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}

export default Profile
