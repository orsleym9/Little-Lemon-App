import logo from "./assets/Logo.svg"

function Footer() {
    return(
        <div className="footer">
            <div className="footerImage">
                <img className="logo" src={logo} alt="Little Lemon Logo"/>
            </div>
            <div className="navigation">
                <p className="footerTitle">Doormat <br></br> Navigation</p>
                <ul className="navigationList">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
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