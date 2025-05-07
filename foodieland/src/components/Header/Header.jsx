import { Link } from 'react-router-dom'
import './Header.scss'
import Nav from './Nav/Nav'
import facebook from '../../assets/homepage/svg/facebook.svg'
import twitter from '../../assets/homepage/svg/twitter.svg'
import instagram from '../../assets/homepage/svg/instagram.svg'

function Header() {
  return (
    <header className="header">
        <Link to="/" className='logo'>Foodieland.</Link>
        <Nav />
        <div className="header-socials">
          <img src={facebook} alt="facebook" className="header-socials__img" />
          <img src={twitter} alt="twitter" className="header-socials__img" />
          <img src={instagram} alt="instagram" className="header-socials__img" />
        </div>
    </header>
  )
}

export default Header