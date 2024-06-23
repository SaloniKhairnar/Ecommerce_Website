import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
//import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const access_key = '9rMNU5-QqNx4tAdwfmwDGggygaSbuH1DAFO_N5nXy8c'
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos',
          {
            headers: {
              Authorization: `Client-ID ${access_key}`
            },
            params: {
              query: searchTerm || 'electronics',
              per_page: 30
            }
          });
        console.log(response.data)
        setProducts(response.data.results)
      }
      catch (error) { console.error('Error fetching the product details:', error) };
    }
    fetchImages();
  }, [searchTerm]);

  return (
    <Router>
      <div className="container-fluid p-0">
        <header className="row m-0 justify-content-between">
          <h3 className="logo p-2 pl-3">Shopify</h3>
          <input type="text" className="my-auto mr-2 p-1" placeholder="Search Products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <i className="fa fa-cart-plus far mr-3 my-auto"></i>
        </header>
        <nav className="menu-bar p-1 p-2 p-lg-3">
          <ul className="list-unstyled m-0 row w-100">
            <li className="px-3 ml-auto"><Link to='/'>Home</Link></li>
            <li className="px-3"><Link to='/products'>Products</Link></li>
          </ul>
        </nav>
        <div>
          <switch>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<ProductList products={products} />} />
              <Route path="/product/:id" element={<ProductDetails products={products} />} />
            </Routes>
          </switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
