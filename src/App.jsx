import { useState } from "react"
import StudentLayout from "./layouts/StudentLayout"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Academics from "./pages/Academics"
import Activities from "./pages/Activities"
import YearPage from "./pages/YearPage"
import OverallReport from "./pages/OverallReport"

function App() {
  const [activePage, setActivePage] = useState("Home")

  const renderPage = () => {
    if (activePage === "Home") return <Home />
    if (activePage === "Profile") return <Profile />
    if (activePage === "Academics") return <Academics />
    if (activePage === "Activities") return <Activities />
    if (
      activePage === "1st Year" ||
      activePage === "2nd Year" ||
      activePage === "3rd Year" ||
      activePage === "4th Year"
    ) {
      return <YearPage year={activePage} />
    }
    if (activePage === "Report") return <OverallReport />
    return <Home />
  }

  return (
    <StudentLayout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </StudentLayout>
  )
}

export default App
