import "./Card.style.css"
import imag from "../assets/images/ordinarysol.jpg"
export default function Card(props){
    return(

        <div className="card--container">
            <div className="card--img">
                    <img src={imag} alt="skincare solution"/>
            </div>
            <div className="card--brand">   
            
           <p className="brand--name"> {props.name} <br /></p>
            <p className="type">{props.desc}<br /></p>
            <p className="brand--name">${props.price} <button className="icon--btn"><i class="fa fa-cart-plus" aria-hidden="true"></i></button></p>
            

            </div>
            <div className="card--name">
                

            </div>
            <div className="card--price">
                

            </div>

        </div>






    )
}