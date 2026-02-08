import SectionCard from "../components/SectionCard"
import InfoRow from "../components/InfoRow"

function Activities() {
  return (
    <>
      <SectionCard title="Projects">
        <InfoRow label="Student Dashboard System" value="Completed" />
        <InfoRow label="AI Resume Tracker" value="Ongoing" />
      </SectionCard>

      <SectionCard title="Internships">
        <InfoRow label="Zoho Corp" value="Web Development Intern" />
        <InfoRow label="TCS" value="Cloud Intern" />
      </SectionCard>

      <SectionCard title="Competitions">
        <InfoRow label="Smart India Hackathon" value="Participated" />
        <InfoRow label="Code Debug Contest" value="Runner Up" />
      </SectionCard>
    </>
  )
}

export default Activities
