// import Carousel  from "./Components/Carousel"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import './App.css'


// import Coin from "./Components/Coin";
// import NewCoin from "./Components/NewCoin";
import Card from "./Components/Cart";
// import ListItem from "./Components/ListItem";
import Movies from './Components/Movies';
import MovieData from './Components/MovieData';
import Register from './Components/Register';
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import ProductCart from "./Components/productCart";
// import NewCoin from "./Components/NewCoin";
// import { Carousel } from "bootstrap";

export default function App() {

  return (
    <>
      <Nav />
      <Routes >
        {/* <Route path="/" element={<Carousel />}/> */}
        <Route path="/Products" element={<MovieData />}/>
        <Route path="/Login" element={<Register />}/>
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<ProductCart />} />
      </Routes>
      <Footer />
    </>
  )
}

// export default App
