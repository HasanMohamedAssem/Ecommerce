import './App.css';
import Body from './components/Body/Body';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import ProductBar from './components/ProductBar/ProductBar';
import data from "./components/data/Data"


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

  return (
    <div className="App">
      
      <Navbar />
      <Body />
      <ProductBar 
      title ="Best Selling Products "
      view ="View All Products "
      />
    <div className='cards--app'>
      {arr}
    </div>

    <ProductBar 
      title ="Top Brands "
      view ="View All Brands "
      />

    </div>
  );
}

export default App;
