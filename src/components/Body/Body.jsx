import "./Body.style.css"
import imag from "../assets/images/brand2.png"
import imag2 from "../assets/images/pic1.png"
import imag3 from "../assets/images/pic2.png"
import discountimg from "../assets/images/80off.png"

export default function Body(){
    return(

        <div className="body--container">
            
            <div className="body--img">
                <img src={imag}  alt="logo" />
            </div>

            <div className="body-on-imgs">
            <img src={imag2}  alt="logo" />
            </div>
            <div className="body-on-imgs2">
            <img src={imag3}  alt="logo" />
            </div>

            <div className="body--discount--img">
            <img src={discountimg}  alt="logo" />
            </div>


        </div>

    )
}