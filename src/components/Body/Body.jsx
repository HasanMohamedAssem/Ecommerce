import "./Body.style.css"
import imag from "../assets/images/firstimg.jpg"

export default function Body(){
    return(

        <div className="body--container">
            
            <div className="body--img">
                <img src={imag}  alt="logo" />
            </div>


        </div>

    )
}