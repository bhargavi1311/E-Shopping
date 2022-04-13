import logo from './logo.svg';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
// import { BrowserRouter } from 'react-router-dom';
// import Product_Menu from './pages/Product_Menu';
import { Route, Routes } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/CheckOut';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import Error from './pages/Error';
import BlogList from './pages/BlogList';
import BlogSingle from './pages/BlogSingle';
import { Provider } from 'react-redux';
import { useState } from 'react';
import produce from 'immer';
import Menu from './Menu';
import Category from './pages/Category';

function App() {
 
  // const [cartItems,setCartItems] = useState([]);

  // const handleAddProduct = (Category) =>{
  //   const CategoryExist = cartItems.find((item) => item.id === Menu.id);
  //   if(CategoryExist){
  //     setCartItems(cartItems.map((item) => item.id === Menu.id ? 
  //     {...CategoryExist,quantity : CategoryExist.quantity+1} : item)
  //     );}
  //   else{
  //     setCartItems([...cartItems, {...Category,quantity :1}]);
  //   }
  // }
  
  return (
    <>
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Product" element={<Product/>}/>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/BlogList" element={<BlogList/>}/>
        <Route path="/BlogSingle" element={<BlogSingle/>}/>
        <Route path="/404" element={<Error/>}/>
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
