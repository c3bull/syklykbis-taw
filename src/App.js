import React from "react";
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/layouts/Navbar";
import {UserProvider} from "@auth0/nextjs-auth0";
import OrderPage from "./pages/OrderPage";
import PricesPage from "./pages/PricesPage";
import Products from "./pages/Products";
// import Juices from "./components/products/sorted/Juices";
import ProductsDetails from "./pages/ProductsDetails";
// import CarbDrinks from "./components/products/sorted/CarbDrinks";
// import NonCarbDrinks from "./components/products/sorted/NonCarbDrinks";
// import Water from "./components/products/sorted/Water";
import Footer from "./components/footer/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar/>
                {/*<Sidebar/>*/}
                {/*<ScrollToTop>*/}
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/o-nas' element={<About/>}/>
                    <Route path='/kontakt' element={<Contact/>}/>
                    <Route path='/produkty' element={<Products/>}/>
                    <Route path='/cennik' element={<PricesPage/>}/>
                    <Route path='/zamow' element={<OrderPage/>}/>
                    <Route path='/produkty/:category' element={<ProductsDetails/>}/>
                    {/*<Route path='/produkty/napoje-niegazowane' element={<NonCarbDrinks/>}/>*/}
                    {/*<Route path='/produkty/napoje-gazowane' element={<CarbDrinks/>}/>*/}
                    {/*<Route path='/produkty/bogus' element={<Bogus/>}/>*/}
                    {/*<Route path='/produkty/woda-zrodlana' element={<Water/>}/>*/}
                </Routes>
                {/*</ScrollToTop>*/}
                <Footer/>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
