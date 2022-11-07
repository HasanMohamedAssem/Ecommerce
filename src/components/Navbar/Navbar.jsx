import "./Navbar.style.css"
import logo from "../assets/images/logo.png"
import {ReactComponent as ShoppingCart} from "../assets/images/shopping-cart-icon.svg"
export default function Navbar(){

    return(
          <div className="nav--container">

        <div className="nav--brand--name">
        <img src={logo} alt="logo" className="logoimg"/><h3>Go Pretty</h3>
        </div>

        <div className="brand--menu">
            <a href="/">Shop</a>
            <a href="/">Products</a>
            <a href="/">Sale</a>
            <a href="/">Contact</a>
        </div>
        <div className="brand--search">

       <div class="input-group">
       <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button type="button" class="btn btn-outline-success">search</button>
       </div>
        </div>
        <div className="shopping-cart">
          <ShoppingCart />
        </div>
          </div>


    )
}