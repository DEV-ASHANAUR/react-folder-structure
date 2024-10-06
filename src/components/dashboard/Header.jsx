import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-red-700 text-white text-center text-2xl">
        <ul className="flex gap-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/users">Users</Link></li>
        </ul>
    </div>
  )
}

export default Header