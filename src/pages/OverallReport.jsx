import ReportBanner from "../components/ReportBanner"
import SectionCard from "../components/SectionCard"

function OverallReport() {
  return (
    <>
      <ReportBanner
        title="Overall Performance Report"
        description="This report summarizes your academic journey from Year 1 to Year 4"
        actionText="Download PDF"
        onAction={() => alert("PDF download triggered")}
      />

      <SectionCard title="Academic Summary">
        CGPA: 8.7 <br />
        Attendance: 92% <br />
        Projects Completed: 10
      </SectionCard>

      <SectionCard title="Achievements">
        🏆 Hackathon Finalist <br />
        📜 6 Professional Certifications <br />
        💼 2 Internships Completed
      </SectionCard>
    </>
  )
}

export default OverallReport
