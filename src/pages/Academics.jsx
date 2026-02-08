import SectionCard from "../components/SectionCard"
import InfoRow from "../components/InfoRow"

function Academics() {
  return (
    <>
      <SectionCard title="Semester 1 Results">
        <InfoRow label="Mathematics" value="85%" />
        <InfoRow label="Physics" value="82%" />
        <InfoRow label="Programming" value="88%" />
      </SectionCard>

      <SectionCard title="Semester 2 Results">
        <InfoRow label="Data Structures" value="86%" />
        <InfoRow label="OOPS" value="90%" />
        <InfoRow label="Digital Logic" value="84%" />
      </SectionCard>
    </>
  )
}

export default Academics
