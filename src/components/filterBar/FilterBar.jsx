import "./FilterBar.style.css";

const FilterBar =()=>{
    return(

        <div className="FBcontainer">
            <div className="FBtitle">
                <button className="filterbtn">Filter by ⌄</button>
                <button className="filterbtn">Sort by ⌄</button>
            </div>

            <div className="FBview">
                <a href="/">View All Products</a>
                </div>
        </div>


    )
}
export default FilterBar