import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header
