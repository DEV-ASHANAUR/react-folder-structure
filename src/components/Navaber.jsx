import { Link } from "react-router-dom"

const Navaber = () => {
  return (
    <div className="bg-red-700 text-white text-center text-2xl">
        <ul className="flex gap-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
    </div>
  )
}

export default Navaber