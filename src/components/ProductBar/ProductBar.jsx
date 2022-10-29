import "./ProductBar.style.css"

export default function ProductBar(props)
    {
        
        return(
            <div className="bar--container">

                <div className="bar--title">
                    <h2>{props.title}</h2>
                </div>

                <div className="bar--view">
                <a href="/">{props.view}</a>
                </div>


            </div>
        )

    }
