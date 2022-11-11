import './App.css';
import Body from './components/Body/Body';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import ProductBar from './components/ProductBar/ProductBar';
import data from "./components/data/Data"
import {ReactComponent as Arrow} from "../src/components/assets/images/arrowIcon.svg"
import BrandCard from './components/BrandCards/BrandCards';
import brandsdata from './components/data/TopBrandsData';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductHead from './components/productHead/ProductHead';


function App() {

const arr = data.map(items =>
  {
    return(
      <Card
      img ={items.img}
      name ={items.name}
      desc={items.desc}
      price={items.price} 
      />
    )
  }
  )


  const brandsArray = brandsdata.map(items =>
    {
      return(
        <BrandCard
        img ={items.img}
        name ={items.name}
        desc={items.desc}
    
        />
      )
    }
    )
  


  return (
    <div className="App">
      
<BrowserRouter>
<Routes>

<Route path="/" element={<>   
   <Navbar />
      <Body />
      <ProductBar 
      title ="Best Selling Products "
      view ="View All Products "
      />
    <div className='cards--app'>
      {arr}
      <div className='arrow'>
      <Arrow />
      </div>
    </div>

    <ProductBar 
      title ="Top Brands "
      view ="View All Brands "
      />

<div className='cards--app brand-cards'>

  {brandsArray}

</div>
</>}/>


    <Route path="products" element={<>   
        <Navbar />
        <ProductHead />
    </>
    }/>



</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
