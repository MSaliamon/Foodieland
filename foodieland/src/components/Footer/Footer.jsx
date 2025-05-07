import { Link } from 'react-router-dom'
import './Footer.scss'
import Nav from '../Header/Nav/Nav'
import facebook2 from '../../assets/homepage/svg/facebook2.svg'
import twitter2 from '../../assets/homepage/svg/twitter2.svg'
import instagram2 from '../../assets/homepage/svg/instagram2.svg'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-box">
                <Link to="/" className='logo'>Foodieland.</Link>
                <p className="footer-box__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <Nav />
        </div>
        <div className="footer-container2">
            <p className="footer-container2__text">© 2020 Flowbase. Powered by Webflow</p>
            <div className="footer-container2__socials">
                <img src={facebook2} alt="facebook" className="footer-container2__socials-facebook" />
                <img src={twitter2} alt="twitter" className="footer-container2__socials-twitter" />
                <img src={instagram2} alt="instagram" className="footer-container2__socials-instagram" />
            </div>
        </div>
    </footer>
  )
}

export default Footer