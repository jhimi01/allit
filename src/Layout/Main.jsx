import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"

const Main = () => {
  return (
    <div>
        {/* header */}
        <Navbar />
      <div className="bg-lighterBg">
      <Outlet />
      </div>
      {/* footer */}
    </div>
  )
}

export default Main
