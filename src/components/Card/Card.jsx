import "./Card.style.css"
import {ReactComponent as Icon} from "../assets/images/iconbtn.svg"

export default function Card(props){
    return(

        

        <div className="card-cont">
                 <img src={props.img} className="card--imgs" alt="skincare solution"/>
            <p className="brand--name"> {props.name} <br /></p>
            <p className="type">{props.desc}<br /></p>
            <p className="brand--name">${props.price} <button className="icon--btn"><Icon/></button></p>
        </div>






    )
}