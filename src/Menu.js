import greekSalad from "./assets/greekSalad.jpg"
import bruchetta from "./assets/bruchetta.svg"
import lemonDessert from "./assets/lemonDessert.jpg"

function Menu() {
    return(
        <div className="menu">
            <div className="menuText">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="menuItems">
                <div className="item">
                    <img src={greekSalad} alt="Greek Salad" width="274px" height="164px"/>
                    <div className="itemText">
                        <p className="foodName">Greek Salad</p>
                        <p className="price">$12.99</p>
                    </div>
                    <p className="itemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <p className="delivery">Order a delivery</p>
                </div>
                <div className="item">
                    <img src={bruchetta} alt="Bruchetta" width="274px" height="164px"/>
                    <div className="itemText">
                        <p className="foodName">Bruchetta</p>
                        <p className="price">$5.99</p>
                    </div>
                    <p className="itemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <p className="delivery">Order a delivery</p>
                </div>
                <div className="item">
                    <img src={lemonDessert} alt="Lemon Dessert" width="274px" height="164px"/>
                    <div className="itemText">
                        <p className="foodName">Lemon Dessert</p>
                        <p className="price">$5.00</p>
                    </div>
                    <p className="itemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <p className="delivery">Order a delivery</p>
                </div>
            </div>
        </div>

    )
 }

export default Menu;