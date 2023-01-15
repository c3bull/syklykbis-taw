import React from "react";
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/layouts/Navbar";
import {Auth0Provider} from "@auth0/auth0-react";
import OrderPage from "./pages/OrderPage";
import PricesPage from "./pages/PricesPage";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Footer from "./components/footer/Footer";
import YourOrdersPage from "./pages/YourOrdersPage";
import ScrollToTop from "./components/utils/ScrollToTop";
import Sidebar from "./components/layouts/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <Auth0Provider
            domain="dev-ppzur0y36edjbnm2.eu.auth0.com"
            clientId="8RCOXjGtKc5qFwZlTWILu9l45xwBpHlb"
            redirectUri={window.location.origin}>
            <BrowserRouter>
                <Navbar/>
                <Sidebar/>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/o-nas' element={<About/>}/>
                        <Route path='/kontakt' element={<Contact/>}/>
                        <Route path='/produkty' element={<Products/>}/>
                        <Route path='/cennik' element={<PricesPage/>}/>
                        <Route path='/zamow' element={<OrderPage/>}/>
                        <Route path='/produkty/:category' element={<ProductsDetails/>}/>
                        <Route path='/twoje-zamowienia' element={<YourOrdersPage/>}/>
                        <Route path='/zaloguj' element={<Login/>}/>
                        <Route path='/zarejestruj' element={<Register/>}/>
                    </Routes>
                </ScrollToTop>
                <Footer/>
            </BrowserRouter>
        </Auth0Provider>
    );
}

export default App;
