import "./BrandCards.style.css"
import { ReactComponent as Garrow } from "../assets/images/greenArrow.svg"
export default function BrandCard(props)
{
    return(

        

        <div className="brand-card-cont">

            <div className="brand--name">
                <h4>{props.name}</h4>
            </div>

            <div className="brand--img">
                <img src={props.img} alt="logo" />
                <Garrow/>

            </div>

            <div className="brand--offer">  
            <h3>{props.desc}</h3>

            </div>


        </div>


       


    )
}