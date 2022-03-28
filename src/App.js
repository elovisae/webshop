import React, {useState, useEffect} from 'react';
import HomePage from './components/homePage/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BestSellers from './components/bestsellers/BestSellers';
import ErrorPage from './components/404';
import ShopAll from './components/shopAll/ShopAll';
import Cart from './components/Cart/Cart';
import Login from './components/loginAndRegistration/Login';
import Register from './components/loginAndRegistration/Register';


function App() {
  const [items, setItems] = useState([])   
    useEffect(() => {fetchAllItems()}, [])
    async function fetchAllItems (){
        try{
            let response        = await fetch('http://localhost:3001/items')
            console.log(response.statusText)
            let items           = await response.json();
            setItems(items);
        }catch (error){
            console.log(error)
        }   
    }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/bestsellers" element={<BestSellers items={items}/>}/>
        <Route path="/shop/all" element={<ShopAll items={items}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
