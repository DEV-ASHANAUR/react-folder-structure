
import { Link } from 'react-router-dom'

const Button = ({children,link}) => {
  return (
    <Link to={link} className='p-2 bg-purple-800 text-white m-6 inline-block'>{children}</Link>
  )
}

export default Button