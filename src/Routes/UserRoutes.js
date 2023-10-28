
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from '../Containers/Shop/Shop';
import Home from '../Containers/Home/Home';
import Blog from '../Containers/Blog/Blog';
import About from '../Containers/About/About';
import Contact from '../Containers/Contact/Contact';
import Cart from '../Containers/Cart/Cart';
import Auth from '../Containers/Auth/Auth';
import Favourite from '../Containers/Favourite/Favourite';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function UserRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;