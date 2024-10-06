import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navaber from "./Navaber"

const Layout = () => {
  return (
    <>
        <Navaber />
           <Outlet />
        <Footer />
    </>
  )
}

export default Layout