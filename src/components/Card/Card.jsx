import "./Card.style.css"
import {ReactComponent as Icon} from "../assets/images/iconbtn.svg"

export default function Card(props){
    return(

        <div className="card--container">
            <div className="card--img">
                    <img src={props.img} alt="skincare solution"/>
            </div>
            <div className="card--brand">   
            
           <p className="brand--name"> {props.name} <br /></p>
            <p className="type">{props.desc}<br /></p>
            <p className="brand--name">${props.price} <button className="icon--btn"><Icon/></button></p>
            

            </div>
            <div className="card--name">
                

            </div>
            <div className="card--price">
                

            </div>

        </div>






    )
}