import "./Navbar.style.css"
import logo from "../assets/images/logo.png"
import {ReactComponent as ShoppingCart} from "../assets/images/shopping-cart-icon.svg"
import { Link } from "react-router-dom"
export default function Navbar(){

    return(
          <div className="nav--container">

        <div className="nav--brand--name">
        <img src={logo} alt="logo" className="logoimg"/><h3>Go Pretty</h3>
        </div>

        <div className="brand--menu">
            
            <Link to="/">Shop</Link>
            <Link to="/products">Products</Link>
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