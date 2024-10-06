import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/dashboard/Dashboard"
import Users from "./pages/dashboard/Users"
import Layout from "./components/Layout"
import DashboardLayout from "./components/dashboard/DashboardLayout"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
