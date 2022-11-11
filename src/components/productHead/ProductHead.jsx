import "./ProductHead.style.css"
import imag from "../assets/images/productimg1.png"

const ProductHead =() =>{
    return(
        <div className="body--containerPH">
            
            <div className="body--imgPH">
                <img src={imag}  alt="logo" />
            </div>

            <div className="firstText-on-imgPH">
                <h1>The Ordinary</h1>
            </div>

            <div className="secondText-on-imgPH">
                <h1>The Ordinary is your destination for Skincare, Makeup, Hair,</h1> 
                   <h1> and Body solutions. Discover clinical formulations with integrity. </h1>
            </div>

            <div className="button-on-imgPH">
                <button>Learn More ❕</button>
            </div>

        </div>
    )
}
export default ProductHead