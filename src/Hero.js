import heroImage from "./assets/heroImage.jpg"
import { Link } from 'react-router-dom';

function Hero() {
    return(
        <div className="hero">
            <div className="heroText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/reservations">
                    <button aria-label="Reservation form">Reserve a Table</button>
                </Link>
            </div>
            <div className="heroImage">
                <img  src={heroImage} alt="restaurant" width="413px"/>
            </div>
        </div>
    )
 }

export default Hero;