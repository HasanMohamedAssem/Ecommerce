import "./Navbar.style.css"
import logo from "../assets/images/logo.png"
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
        <input type="text" placeholder="Search.." />
        <button className="search--btn">
        <i className="fa fa-search"></i>
        </button>
        </div>
          </div>


    )
}