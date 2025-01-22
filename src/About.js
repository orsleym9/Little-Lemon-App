import restaurantFood from "./assets/restaurantFood.jpg"
import chefsImage from "./assets/chefsImage.jpg"

function About() {
    return(
        <div className="about">
            <div className="aboutText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="aboutImages">
                <img className="aboutImage1" src={restaurantFood} alt="food" width="260px" height="305px"/>
                <img className="aboutImage2" src={chefsImage} alt="restaurant" width="260px" height="305px"/>
            </div>
        </div>
    )
 }

export default About;