import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import FoodMenu from './components/FoodMenu.js';
import CoffeeMenu from './components/CoffeeMenu.js';
import Locator from './components/Locator.js';
import News from './components/News.js';
import Awards from './components/Awards.js';
import Menu from './components/Menu.js';
import ProductDetails from './components/ProductDetails.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CartDetails from './components/CartDetails';
function App() {
  const [userdata, setUserData] = useState([]);
  const [cartlength,setCartLength]=useState(0);
  const cartBadge = (number) => {
    setCartLength(number);
  };
    useEffect(() => {
        const fetchData = async() => {
                   try {
            const res = await fetch('/displaydata');
            const data = await res.json();
            console.log("coming data",data);
            setUserData(data.data);
                   }
                   catch (error) {
                    console.log("API Error is", error);
                  }
            
                }
                fetchData();
              }, []);
              console.log("data is",userdata);
  return (
    <div className="App">
      
      <Router>
      <Header cartlength={cartlength}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodmenu" element={<FoodMenu userdata={userdata} />} />
          <Route path="/coffeemenu" element={<CoffeeMenu userdata={userdata} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locator" element={<Locator />} />
          <Route path="/news" element={<News/>} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/menu" element={<Menu userdata={userdata}/>} />
          <Route path="/cartdetails" element={<CartDetails cartBadge={cartBadge} />} />
          <Route path="/productdetails/:_id" element={<ProductDetails userdata={userdata} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
