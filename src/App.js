import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Menu from './Menu.js';
import Reviews from './Reviews.js';
import About from './About.js';
import Footer from './Footer.js';

function App() {
  return (
    <> 
      <Header>
      <meta name="description" content="Little Lemon Restaurant Website"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon Restaurant Website"/>
      <meta name="og:image" content="logo.png"/>
      </Header>
      <Nav>
        <img src="./Logo.svg" alt="Little Lemon Logo"/>
        <ul>
            <li><a href="Header.js">Home</a></li>
            <li><a href="About.js">About</a></li>
            <li><a href="Menu.js">Menu</a></li>
            <li><a href="Main.js">Reservations</a></li>
            <li><a href="Menu.js">Online Order</a></li>
            <li><a href="Main.js">Login</a></li>
        </ul>
      </Nav>
      <Main />
      <Menu />
      <Reviews />
      <About />
      <Footer>
        <img src="./Logo.svg" alt="Little Lemon Logo"/>
      </Footer>
    </>
  );
}

export default App;
