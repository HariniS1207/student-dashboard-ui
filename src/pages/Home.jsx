import StatCard from "../components/StatCard"
import SectionCard from "../components/SectionCard"
import ReportBanner from "../components/ReportBanner"

function Home() {
  return (
    <>
      <ReportBanner
        title="Welcome, Harini 👋"
        description="Track your academic performance and achievements"
        actionText="View Overall Report"
        onAction={() => alert("Navigate to Overall Report")}
      />

      <div className="dashboard-grid">
        <StatCard title="Current CGPA" value="8.7" />
        <StatCard title="Attendance" value="92%" highlight />
        <StatCard title="Projects" value="10" />
        <StatCard title="Certifications" value="6" />
      </div>

      <SectionCard title="Performance Overview">
        📊 Performance graph will be displayed here
      </SectionCard>
    </>
  )
}

export default Home
