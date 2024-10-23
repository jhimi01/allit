import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
        {/* header */}
      <Outlet />
      {/* footer */}
    </div>
  )
}

export default Main
