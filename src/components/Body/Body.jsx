import "./Body.style.css"
import imag from "../assets/images/brand2.png"

export default function Body(){
    return(

        <div className="body--container">
            
            <div className="body--img">
                <img src={imag}  alt="logo" />
            </div>


        </div>

    )
}