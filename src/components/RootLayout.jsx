import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="px-7">
        <Outlet />
      </div>
      <Footer />


    </div>
  )
}
export default RootLayout