import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Containers/Home/Home';
import Footer from './components/Footer';
import Shop from './Containers/Shop/Shop';
import Blog from './Containers/Blog/Blog';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Cart from './Containers/Cart/Cart';
import Auth from './Containers/Auth/Auth';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop/" element={<Shop />} />
          <Route path="blog/" element={<Blog />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="auth/" element={<Auth />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
