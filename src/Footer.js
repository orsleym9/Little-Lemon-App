import logo from "./assets/Logo.svg"
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer">
            <div className="footerImage">
                <img className="logo" src={logo} alt="Little Lemon Logo"/>
            </div>
            <div className="navigation">
                <p className="footerTitle">Doormat <br></br> Navigation</p>
                <ul className="navigationList">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/reservations"><li>Reservations</li></Link>
                    <Link to="/menu"><li>Order Online</li></Link>
                    <Link to="/"><li>Login</li></Link>
                </ul>
            </div>
            <div className="contact">
                <p className="footerTitle">Contact</p>
                <ul className="contactList">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="socialMedia">
                <p className="footerTitle">Social Media Links</p>
                <ul className="socialMediaList">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    )
 }

export default Footer;