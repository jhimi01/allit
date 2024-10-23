import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"

const Main = () => {
  return (
    <div>
        {/* header */}
        <Navbar />
      <Outlet />
      {/* footer */}
    </div>
  )
}

export default Main
